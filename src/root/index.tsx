import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import navbar from "../utils/sidebar";

export const Root = () => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        {navbar.map((menu) => {
          const { element: Element } = menu;
          return <Route key={menu.id} path={menu.path} element={<Element />} />;
        })}
      </Route>
      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
};

export default Root;
