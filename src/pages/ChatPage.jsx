import { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import MessagesBox from "../components/MessagesBox";
import MessageSender from "../components/MessageSender";

export default function ChatPage() {
  const { isAuth } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <div>
      <div className="container xl mx-auto h-screen flex justify-center items-center flex-col gap-6">
        <MessagesBox />
        <MessageSender />
      </div>
    </div>
  );
}
