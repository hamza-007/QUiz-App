import { useDispatch } from "react-redux";
import { login } from "../redux/actions/UserActions";


export const useAuth = () => {
  //let dispatch = useDispatch()
  let user = window.localStorage.getItem("user");
  
  return user;
};
