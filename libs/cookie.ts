import cookieCutter from 'cookie-cutter'

const setCookie = (key: string, value: string) => cookieCutter.set(key, value)

const getCookie = (key: string) => cookieCutter.get(key)

export {
  setCookie,
  getCookie,
};
