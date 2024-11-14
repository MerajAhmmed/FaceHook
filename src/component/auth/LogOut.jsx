import { useNavigate } from "react-router-dom";
import logOut from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";

export default function LogOut() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={logOut} alt="Logout" />
    </button>
  );
}
