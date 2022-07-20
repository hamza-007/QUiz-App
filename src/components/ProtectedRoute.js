import { Navigate, Routes, Route } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Home, Questions, Result, QuestionReview } from "../pages";

const ProtectedRoute = ({children}) => {
  const user = useAuth()
  if (!user){
    return <Navigate to="/login" />
  }
 
  return children;
   
};
export default ProtectedRoute