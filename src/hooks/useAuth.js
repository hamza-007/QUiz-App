export const useAuth = () => {
  return window.localStorage.getItem("user");
};
