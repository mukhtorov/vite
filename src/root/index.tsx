import { Navigate, Route, Routes } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import navbar from "../utils/sidebar";

// type MenuProp = {
//   id: number | string;
//   title: string;
//   path: string;
//   isPrivate?: boolean | undefined;
//   element: React.FC;
//   children?: MenuProp;
//   icon?: React.FC;
//   role: string[];
// }[];

// const menuItem: React.FC<MenuProp> = (item) => {
//   return item.map((menu) => {
//     const { element: Element, children } = menu;
//     if (children) menuItem(children);
//     return <Route key={menu.id} path={menu.path} element={<Element />} />;
//   });
// };

export const Root = () => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        {/* {menuItem(navbar)} */}
        {navbar.map((menu) => {
          const { element: Element, children } = menu;
          if (children) {
            return children.map((menu) => {
              return (
                <Route key={menu.id} path={menu.path} element={<Element />} />
              );
            });
          } else
            return (
              <Route key={menu.id} path={menu.path} element={<Element />} />
            );
        })}
      </Route>
      <Route path="/" element={<Navigate to={"/analitika"} />} />
      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
};

export default Root;
