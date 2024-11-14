import { useEffect } from "react";
import { actions } from "../actions";
import Bio from "../component/profile/Bio";
import ProfileInfo from "../component/profile/ProfileInfo";
import { useAuth } from "../hooks/useAuth";
import { useAxios } from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";

export default function ProfilePage() {
  const { state, dispatch } = useProfile();

  const { api } = useAxios();
  const { auth } = useAuth();
  console.log(auth);

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: err.message,
        });
      }
    };

    fetchProfile();
  }, []);

  if (state?.loading) {
    return <div> Fetching your Profile data...</div>;
  }
  console.log(state);
  console.log("Meraj");

  return (
    <>
      <ProfileInfo />
      <Bio />
    </>
  );
}
