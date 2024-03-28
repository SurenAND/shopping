import { Router } from "./src/routes";
import "./src/styles/style.css";

if (location.pathname === "/") {
  Router().navigate("/");
} else if (location.pathname === "/cart") {
  Router().navigate("/cart");
} else {
  Router().navigate("/404");
}
