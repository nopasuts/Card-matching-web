import { getCookie } from "libs/cookie";
import { API } from "services";

export const onOpen = async (position: string) => {
  const c_board_id = getCookie('c_board_id');
  const result = await API.getCard(c_board_id, position);
  return result;
};

export const onMatchCard = async (first_position, second_position) => {
  const c_board_id = getCookie('c_board_id');
  const payload = {
    board_id: c_board_id,
    first_position,
    second_position,
  };
  const result = await API.matchCard(payload);
  return result;
};

export const onEachClick = async () => {
  const c_board_id = getCookie('c_board_id');
  const payload = {
    board_id: c_board_id,
  };
  const result = await API.updateClick(payload)
  return result;
}
