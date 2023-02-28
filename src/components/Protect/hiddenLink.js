import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUser,
} from "../../store/actions/auth/authSlice";

//* Función para mostrar las páginas de acuerdo al rol del usuario
export const AdminAuthorLink = ({ children }) => {
  // Estado de la sesión (activa o inactiva)
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Rol del usuario
  const userRole = useSelector(selectUser);

  if (
    isLoggedIn &&
    (userRole === "Administrador" || userRole === "Colaborador")
  ) {
    return <>{children}</>;
  }

  return null;
};
