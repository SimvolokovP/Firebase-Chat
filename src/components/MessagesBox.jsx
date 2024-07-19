import { useCollectionData } from "react-firebase-hooks/firestore";
import { firebaseDB } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import Loader from "./Loader";
import Message from "./Message";
import { useEffect, useState } from "react";

export default function MessagesBox() {
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(firebaseDB, "messages");
  const messagesQuery = query(messagesRef, orderBy("timestamp", "desc"));

  const [data, loading, error] = useCollectionData(messagesQuery);

  useEffect(() => {
    setMessages(data);
  }, [data, messages]);

  return (
    <div className="mess-box border-solid border-4 border-orange-300 p-2 rounded-lg w-2/4 bg-white flex flex-col gap-3 overflow-y-auto">
      {loading && <Loader />}
      {error && <div>{error.message}</div>}
      {messages && messages.length > 0 ? (
        messages.map((message) => (
          <Message message={message} key={message.mid} />
        ))
      ) : (
        <div>No messages available.</div>
      )}
    </div>
  );
}
