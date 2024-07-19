import { useUser } from "../hooks/useUser";

export default function Message({ message }) {
  const { uid } = useUser();

  function timeAgo(timestamp) {
    if (timestamp && timestamp.seconds) {
      const messageDate = new Date(timestamp.seconds * 1000);
      const now = new Date();
      const diffInSeconds = Math.floor((now - messageDate) / 1000);

      const minutes = Math.floor(diffInSeconds / 60);
      const hours = Math.floor(diffInSeconds / 3600);
      const days = Math.floor(diffInSeconds / 86400);

      if (diffInSeconds < 60) {
        return `${diffInSeconds} секунд(ы) назад`;
      } else if (minutes < 60) {
        return `${minutes} минут(ы) назад`;
      } else if (hours < 24) {
        return `${hours} час(а/ов) назад`;
      } else {
        return `${days} день(дней) назад`;
      }
    }
    return null;
  }

  return (
    <div
      className={
        uid === message.uid
          ? "flex gap-2 w-full justify-end"
          : "flex gap-2 w-full justify-start"
      }
    >
      <img
        className="w-8 h-8 rounded-full"
        src={message.photoUrl}
        alt={message.displayName}
      />
      <div
        className={
          uid === message.uid
            ? "max-w-80 grow border-solid border-4 border-green-300 p-2 rounded-lg text-slate-950"
            : "max-w-80 grow border-solid border-4 border-orange-300 p-2 rounded-lg text-slate-950"
        }
      >
        <div className="text-lg">{message.text}</div>
        <div className="text-sm text-gray-600">
          {message.displayName} / {timeAgo(message.timestamp)}
        </div>
      </div>
    </div>
  );
}
