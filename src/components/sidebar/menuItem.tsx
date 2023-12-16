import { MenuItemWrapper } from "./style";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  subitem?: string;
  active?: boolean;
};

export const MenuItem: React.FC<Props> = ({
  children,
  onClick,
  subitem,
  active,
}) => {
  return (
    <MenuItemWrapper onClick={onClick} subitem={subitem} active={active}>
      {children || "no title"}
    </MenuItemWrapper>
  );
};
