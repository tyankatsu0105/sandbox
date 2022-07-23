import { useLocation } from 'react-router';

export const useQueryString = <T extends string>() => {
  const { search } = useLocation();
  if (!search) return undefined;

  const query = search.substring(1);
  const params = new URLSearchParams(query);
  const paramsEntries = params.entries();

  const getParamsObject = (entries: typeof paramsEntries) =>
    [...entries].reduce(
      (acc, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      {} as { [key in T]?: string }
    );

  const result = getParamsObject(paramsEntries);

  return result;
};
