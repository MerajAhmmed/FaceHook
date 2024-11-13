import { useNavigate } from "react-router-dom";
import logOut from "../../assets/icons/logout.svg";

export default function LogOut() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={logOut} alt="Logout" />
    </button>
  );
}
