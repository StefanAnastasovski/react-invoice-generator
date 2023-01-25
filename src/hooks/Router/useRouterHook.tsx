import { useNavigate, useParams } from "react-router-dom";

export const useRouterHook = () => {
  const params = useParams();
  const navigate = useNavigate();

  return {
    params,
    navigate,
  };
};
