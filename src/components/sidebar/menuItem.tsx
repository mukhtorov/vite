import { MenuItemWrapper } from "./style";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  subitem?: string;
};

export const MenuItem: React.FC<Props> = ({ children, onClick, subitem }) => {
  return (
    <MenuItemWrapper onClick={onClick} subitem={subitem}>
      {children || "no title"}
    </MenuItemWrapper>
  );
};
