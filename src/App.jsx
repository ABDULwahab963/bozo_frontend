import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/user/landing/Home";
import { authRoutes, routes } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import { loadUser } from "./redux/actions/user";
const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  const { message, error, loading, user, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, []);


  
  return (
    <ReactLenis root>
      <Router>
        <Navbar />
        <Routes>
          {routes.map((r) => (
            <Route
              path={r.path}
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  redirect={"/login"}
                >
                  <r.element />
                </ProtectedRoute>
              }
            />
          ))}

          {authRoutes.map((r) => (
            <Route
              path={r.path}
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect={"/"}
                >
                  <r.element />
                </ProtectedRoute>
              }
            />
          ))}
        </Routes>
        <Footer />
      </Router>
      <Toaster />
    </ReactLenis>
  );
};

export default App;
