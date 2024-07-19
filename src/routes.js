import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";

export const publicRoutes = [
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/chat",
    Component: ChatPage,
  },
];
