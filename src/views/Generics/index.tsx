import { useLocation } from "react-router-dom";

export const Generics = () => {
  const location = useLocation();
  return <h1>Generics /{location.pathname}</h1>;
};
