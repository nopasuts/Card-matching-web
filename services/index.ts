import { client } from "libs/fetch";

const games = {
  getGame: async (board_id: string) => {
    const { data } = await client.get(`/games/${board_id}`)
    return data;
  },
  createGame: async () => {
    const { data } = await client.post(`/games`)
    return data;
  },
  updateClick: async (body) => {
    const { data } = await client.put(`/games/click`, body)
    return data;
  },
  finishGame: async (body) => {
    const { data } = await client.post(`/games/finish`, body);
    return data;
  },
}

const cards = {
  getCard: async (board_id: string, position: string) => {
    const { data } = await client.get(`/cards/${board_id}/${position}`)
    return data;
  },
  matchCard: async (payload) => {
    const { data } = await client.post(`/cards/match-card`, payload)
    return data;
  },
}

const stats = {
  getOrCreateUser: async (user_id: string) => {
    const { data } = await client.get(`/stats/${user_id}`)
    return data;
  },
}

export const API = {
  ...games,
  ...cards,
  ...stats,
}
