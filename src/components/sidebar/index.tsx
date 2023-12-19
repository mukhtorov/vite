import { Outlet, useLocation, useNavigate } from "react-router-dom";
import navbar from "../../utils/sidebar";

import {
  Arrow,
  BodyWrapper,
  Container,
  ItemWrapper,
  MenuScrollWrapper,
  MenuWrapper,
} from "./style";
import { Header } from "./headers";
import { Profile } from "./profile";
import { MenuItem } from "./menuItem";
import { useState } from "react";

export const Sidebar = () => {
  const location = useLocation();
  const session = sessionStorage.getItem("menu") || "[]";

  const [openMenu, setMenu] = useState([
    location.pathname,
    ...JSON.parse(session),
  ]);
  const navigate = useNavigate();

  const onClickParent = (path: string, children: unknown | undefined) => {
    if (children) {
      if (openMenu.includes(path)) {
        const filtered = openMenu.filter((val) => val !== path);
        setMenu(filtered);
        sessionStorage.setItem("menu", JSON.stringify(filtered));
      } else {
        setMenu([...openMenu, path]);
        sessionStorage.setItem("menu", JSON.stringify([...openMenu, path]));
      }
    } else navigate(path);
  };

  return (
    <Container>
      <MenuScrollWrapper>
        <MenuWrapper>
          <Header />
          <Profile />
          {navbar.map((item) => {
            const { icon: Icon, children } = item;
            const active = openMenu.includes(item.path);
            return (
              <ItemWrapper key={item.id} active={active.toString()}>
                <MenuItem
                  active={location.pathname.includes(item.path).toString()}
                  key={item.id}
                  onClick={() => onClickParent(item.path, children)}
                >
                  <Icon className="icon" /> {item.title}
                  {children && <Arrow active={active.toString()} />}
                </MenuItem>
                {children &&
                  children.map((subItem) => {
                    return (
                      <MenuItem
                        key={subItem.id}
                        onClick={() => onClickParent(subItem.path, undefined)}
                        subitem="true"
                        active={location.pathname
                          .includes(subItem.path)
                          .toString()}
                      >
                        {subItem.title}
                      </MenuItem>
                    );
                  })}
              </ItemWrapper>
            );
          })}
        </MenuWrapper>
      </MenuScrollWrapper>
      <BodyWrapper>
        <Outlet />
      </BodyWrapper>
    </Container>
  );
};
