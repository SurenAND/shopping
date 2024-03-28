import Navigo from "navigo";
import { HomePage } from "../pages/home";
import { CartPage } from "../pages/cart";
import { NotFoundPage } from "../pages/404";

const changePage = (page) => {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.append(page());
};

let router = new Navigo("/");
export const Router = () => {
  router
    .on("/", () => {
      changePage(HomePage);
    })
    .on("/cart", () => {
      changePage(CartPage);
    })
    .on("/404", () => {
      changePage(NotFoundPage);
    });
  return router;
};
