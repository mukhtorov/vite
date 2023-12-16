import { Outlet, useLocation, useNavigate } from "react-router-dom";
import navbar from "../../utils/sidebar";

import { Arrow, Container, ItemWrapper, MenuWrapper } from "./style";
import { Header } from "./headers";
import { Profile } from "./profile";
import { MenuItem } from "./menuItem";
import { useState } from "react";

export const Sidebar = () => {
  const location = useLocation();
  const [openMenu, setMenu] = useState([location.pathname]);
  const navigate = useNavigate();

  const onClickParent = (path: string) => {
    // if (children)
    if (openMenu.includes(path))
      setMenu(openMenu.filter((val) => val !== path));
    else setMenu([...openMenu, path]);
    navigate(path);
  };

  return (
    <Container>
      <MenuWrapper>
        <Header />
        <Profile />
        {navbar.map((item) => {
          const { icon: Icon, children } = item;
          return (
            <ItemWrapper active={openMenu.includes(item.path)}>
              <MenuItem
                active={location.pathname.includes(item.path)}
                key={item.id}
                onClick={() => onClickParent(item.path)}
              >
                <Icon className="icon" /> {item.title}
                {children && <Arrow />}
              </MenuItem>
              {children &&
                children.map((subItem) => {
                  return (
                    <MenuItem
                      key={subItem.id}
                      onClick={() => navigate(`${item.path}${subItem.path}`)}
                      subitem="true"
                      active={location.pathname.includes(
                        `${item.path}${subItem.path}`
                      )}
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
