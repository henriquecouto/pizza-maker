const keyfier = (key: string) => `@pizza-maker:${key}`;
const valuefier = (value: unknown) => JSON.stringify(value);

export const useLocalStorage = () => {
  const set = (key: string, value: unknown) => {
    window.localStorage.setItem(keyfier(key), valuefier(value));
  };
  const get = (key: string) =>
    JSON.parse(window.localStorage.getItem(keyfier(key)) || 'false');
  const remove = (key: string) => {
    window.localStorage.removeItem(keyfier(key));
  };

  return { set, get, remove };
};
