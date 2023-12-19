import { useSelector } from "react-redux";
import { HeadersContainer, HeadersLogo } from "./style";
import { RootState } from "../../store";

export const Header = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <HeadersContainer>
      <HeadersLogo /> {auth.brandName}
    </HeadersContainer>
  );
};
