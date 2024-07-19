import { Route, Routes, useNavigate } from "react-router-dom"; // Import Routes
import { useUser } from "../hooks/useUser";
import { publicRoutes } from "../routes";

export default function Routing() {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.Component />}
        />
      ))}
    </Routes>
  );
}
