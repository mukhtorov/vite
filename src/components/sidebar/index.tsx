import { Outlet, useNavigate } from "react-router-dom";
import navbar from "../../utils/sidebar";

import { Arrow, Container, ItemWrapper, MenuWrapper } from "./style";
import { Header } from "./headers";
import { Profile } from "./profile";
import { MenuItem } from "./menuItem";

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MenuWrapper>
        <Header />
        <Profile />
        {navbar.map((item) => {
          const { icon: Icon, children } = item;

          return (
            <ItemWrapper>
              <MenuItem key={item.id} onClick={() => navigate(item.path)}>
                <Icon className="icon" /> {item.title}
                {children && <Arrow />}
              </MenuItem>
              {children &&
                children.map((subItem) => {
                  return (
                    <MenuItem
                      key={subItem.id}
                      onClick={() => navigate(subItem.path)}
                      subitem="true"
                    >
                      {subItem.title}
                    </MenuItem>
                  );
                })}
            </ItemWrapper>
          );
        })}
      </MenuWrapper>
      <Outlet />
    </Container>
  );
};
