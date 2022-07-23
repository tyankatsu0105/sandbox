export const getCookies = <T extends string>() => {
  const cookies = document.cookie.split(';');

  const cookieObject = cookies.reduce((acc, current) => {
    const [key, value] = current.split('=');

    acc = {
      ...acc,
      [key]: value,
    };
    return acc;
  }, {} as { [key in T]?: string });

  return cookieObject;
};
