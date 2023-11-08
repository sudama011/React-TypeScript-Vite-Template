import { useSelector } from "react-redux";

const useAuth = () => {
  return useSelector((state: any) => state.user);
};

export default useAuth;
