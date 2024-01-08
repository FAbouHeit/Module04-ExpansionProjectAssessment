import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'
import Dashboard from "../pages/Dashboard/Dashboard";
import AllProducts from '../pages/AllProducts/AllProducts'
import NotAuthorized from '../pages/NotAuthorized/NotAuthorized'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import { useEffect, useState } from "react";
import { useUserContext } from '../components/UserContext/UserContext';

function AppRoutes() {
    const {user} = useUserContext();
  const [authed, setAuthed] = useState("");

  useEffect(() => {
    if (user.Role === "admin") {
      setAuthed(<Dashboard/>);
    } else {
      setAuthed(<NotAuthorized/>);
    }
  }, [user]);

  // console.log("user in approutes: ", user);

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dashboard" element={authed} />
            <Route path="/*" element={<PageNotFound/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
