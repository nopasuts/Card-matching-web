import { getCookie, setCookie } from "libs/cookie";
import { useEffect, useState } from "react";
import { API } from "services";

export const useStats = () => {
  const [stat, setStat] = useState(null);
  const [global, setGlobal] = useState(null);

  const onFetchUser = async () => {
    const c_user_id = getCookie('c_user_id');
    const result = await API.getOrCreateUser(c_user_id);
    setStat(result);
    setCookie('c_user_id', result?.user_id)
  };
  const onFetchGlobal = async () => {
    const global_id = 'GLOBAL_STAT'
    const result = await API.getOrCreateUser(global_id);
    setGlobal(result);
  };

  useEffect(() => {
    onFetchUser();
    onFetchGlobal();
  }, [])

  return {
    stat,
    global,
    onFetchUser,
    onFetchGlobal,
  }
}

export const onFinish = async (board_id: string) => {
  const c_user_id = getCookie('c_user_id');
  const payload = {
    user_id: c_user_id,
    board_id: board_id
  };
  await API.finishGame(payload);
}