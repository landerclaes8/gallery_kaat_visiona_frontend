import { Navigate } from "react-router";

export const SessionRedirect = () => {
  // const { user } = useAuth();
  // if (!user) {
  //   return <Navigate to="/login" />
  // }

  return (
    <Navigate to={`/home`} />
  )
}
