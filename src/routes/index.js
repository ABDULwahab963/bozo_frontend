import Login from "../pages/user/auth/Login";
import Register from "../pages/user/auth/Register";
import CarDetails from "../pages/user/CarDetails";
import Cart from "../pages/user/Cart";
import Contact from "../pages/user/landing/Contact";
import Home from "../pages/user/landing/Home";
import Shop from "../pages/user/landing/Shop";

export const routes = [
  {
    title: "Home",
    path: "/",
    element: Home,
  },

  {
    title: "Shop",
    path: "/shop",
    element: Shop,
  },

  {
    title: "Car Details",
    path: "/shop/:id",
    element: CarDetails,
  },

  {
    title: "Cart",
    path: "/cart",
    element: Cart,
  },

  {
    title: "Contact",
    path: "/contact",
    element: Contact,
  },
];

export const authRoutes = [
  {
    title: "Login",
    path: "/login",
    element: Login,
  },

  {
    title: "Register",
    path: "/register",
    element: Register,
  },
];
