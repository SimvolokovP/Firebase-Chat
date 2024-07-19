import {
  addDoc,
  collection,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { useState } from "react";
import { firebaseDB } from "../firebase";
import { useUser } from "../hooks/useUser";
import { v4 as uuidv4 } from "uuid";

export default function MessageSender() {
  const [text, setText] = useState("");
  const { email, displayName, photoUrl, uid } = useUser();

  const sendMessage = async () => {
    try {
      const messagesCollection = collection(firebaseDB, "messages");
      await addDoc(messagesCollection, {
        uid,
        email,
        displayName,
        photoUrl,
        text,
        timestamp: serverTimestamp(),
        mid: uuidv4()
      });
      setText("");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex w-2/4 gap-9">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Message.."
        className="grow border-solid border-2 text-slate-950 border-orange-300"
        type="text"
      />
      <button
        onClick={sendMessage}
        className="text-orange-300 flex gap-2 items-center text-xl border-solid border-2 border-orange-300 p-2 rounded-lg"
      >
        Send
      </button>
    </div>
  );
}
