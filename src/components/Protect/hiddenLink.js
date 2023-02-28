import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUser,
} from "../../store/actions/auth/authSlice";

//* Function to display the pages according to the role of the user
export const AdminAuthorLink = ({ children }) => {
  // Session status (active or inactive)
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // user role
  const userRole = useSelector(selectUser);

  if (
    isLoggedIn &&
    (userRole === "Administrador" || userRole === "Colaborador")
  ) {
    return <>{children}</>;
  }

  return null;
};
