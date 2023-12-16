import styled from "styled-components";
import Logo from "../../assets/icons/logo.svg?react";
import arrow from "../../assets/icons/rightArrow.svg?react";

const Arrow = styled(arrow)`
  display: flex;
  margin-left: auto;
`;

const Container = styled.div`
  display: flex;
`;
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--widthSidebar);
  min-width: var(--widthSidebar);
  background-color: var(--primaryColor);
  color: white;
  overflow: hidden;
  overflow-y: scroll;
  height: 100vh;
  &::-webkit-scrollbar {
    width: 5px;
    color: red;
  }
`;

// headers
const HeadersContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(37, 62, 95);
  color: var(--activeColor);
`;
const HeadersLogo = styled(Logo)`
  width: 48px;
  height: 48px;
  margin-right: 16px;
`;

// profile
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 23px 24px 20px 24px;
`;

const ProfileEmail = styled.div`
  color: #929faf;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
`;
const ProfileName = styled.div`
  color: #f8fafc;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  margin-right: 16px;
`;

type MenuProp = {
  subitem?: string;
  active?: boolean;
};
// Menu Item
const MenuItemWrapper = styled.div<MenuProp>`
  display: flex;
  padding: 12px 24px;
  padding-left: ${({ subitem }) => subitem && "60px"};
  min-height: 44px;

  overflow: hidden;
  position: relative;
  cursor: pointer;

  color: ${({ active }) => (active ? `var(--activeColor)` : `white`)};
  background-color: ${({ active }) => (active ? `#253e5f` : ``)};
  & path {
    fill: ${({ active }) => (active ? `var(--activeColor)` : `white`)};
  }

  .icon {
    margin-right: 16px;
    width: 20px;
    height: 20px;
  }
  &:hover {
    background-color: #253e5f;
    color: var(--activeColor);

    & path {
      fill: var(--activeColor);
    }
  }
  &:active {
    transform: scale(0.99);
  }

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

type ItemProp = {
  active?: boolean;
};

const ItemWrapper = styled.div<ItemProp>`
  display: flex;
  flex-direction: column;
  height: auto;
  /* max-height: ${({ active }) => !active && "44px"};
  overflow: ${({ active }) => !active && "hidden"}; */
`;

export {
  Container,
  MenuWrapper,
  HeadersContainer,
  ProfileContainer,
  ProfileImage,
  ProfileEmail,
  ProfileName,
  HeadersLogo,
  ItemWrapper,
  MenuItemWrapper,
  Arrow,
};
