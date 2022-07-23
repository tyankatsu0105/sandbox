export const deleteCookie = <T>(name: T) => {
  const cookies = document.cookie;
  document.cookie = `${cookies}${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
