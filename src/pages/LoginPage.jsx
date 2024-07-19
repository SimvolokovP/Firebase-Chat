import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import { useDispatch } from "react-redux";
import { addUserToStore } from "../store/userSlice";
import Loader from "../components/Loader";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(firebaseAuth, provider);
      console.log(user);
      dispatch(
        addUserToStore({
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL,
          email: user.email,
        })
      );
      navigate("/chat");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="container xl mx-auto h-screen flex justify-center items-center">
        <button
          className="text-orange-300 flex gap-2 items-center text-xl border-solid border-2 border-orange-300 p-2 rounded-lg"
          onClick={() => login()}
        >
          Sing in With <FaGoogle style={{ color: "currentcolor" }} />
        </button>
      </div>
    </div>
  );
}
