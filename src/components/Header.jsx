import { useDispatch } from "react-redux";
import { useUser } from "../hooks/useUser";
import { clearUserFromStore } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { isAuth, displayName, photoUrl } = useUser();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(clearUserFromStore());
    navigate("/");
  };

  return (
    <header className="p-8 fixed w-full">
      <div className="container xl mx-auto bg-orange-300 p-4 rounded-2xl">
        <div className="flex justify-between items-center">
          {isAuth ? (
            <>
              <div className="flex gap-2 items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src={photoUrl}
                  alt={displayName}
                />
                <div>{displayName}</div>
              </div>
              <button onClick={logOut}>Log out</button>
            </>
          ) : (
            <p>Please log in</p>
          )}
        </div>
      </div>
    </header>
  );
}
