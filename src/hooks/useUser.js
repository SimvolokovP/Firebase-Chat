import { useSelector } from "react-redux";

export const useUser = () => {
  const { uid, email, displayName, photoUrl } = useSelector(
    (state) => state.user
  );

  return { isAuth: !!email, email, uid, displayName, photoUrl };
};
