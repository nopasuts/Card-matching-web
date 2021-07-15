import { getCookie, setCookie } from "libs/cookie";
import { useEffect, useState } from "react"
import { API } from "services";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFetch = async (board_id) => {
    setLoading(true);
    const result = await API.getGame(board_id);
    setData(result);
    setLoading(false);
  }

  const onCreate = async () => {
    setLoading(true);
    const result = await API.createGame();
    setData(result);
    setCookie('c_board_id', result?.board_id)
    setLoading(false);
  }

  useEffect(() => {
    const initialGame = async () => {
      const c_board_id = getCookie('c_board_id');
      console.log(c_board_id);
      if (c_board_id && c_board_id !== 'undefined') {
        try {
          await onFetch(c_board_id)
        } catch (err) {
          await onCreate();
        }
      } else {
        await onCreate();
      }
    }
    initialGame();
  }, [])

  return {
    data,
    loading,
    onFetch,
    onCreate,
  }
}