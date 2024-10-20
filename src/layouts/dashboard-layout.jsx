
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId && isLoaded) {
      navigate("/sign-in");
    }
  }, [userId, isLoaded]);

  if (isLoaded) {
    return <Outlet />;
  }
};

export default Layout;
