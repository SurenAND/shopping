import { ROUTE } from "./src/constant/routes";
import { Router } from "./src/routes";
import "./src/styles/style.css";

if (location.pathname === ROUTE.home) {
  Router().navigate(ROUTE.home);
} else if (location.pathname === ROUTE.cart) {
  Router().navigate(ROUTE.cart);
} else {
  Router().navigate(ROUTE.notFound);
}
