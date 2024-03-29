import { El } from "../../utils/el";
import { Router } from "../../routes/index";
import { localization } from "../../constant/localization";
import { ROUTE } from "../../constant/routes";
export const Header = () => {
  return El({
    element: "div",
    className:
      "flex justify-between bg-primary text-white p-5 text-center font-semibold uppercase text-3xl",
    children: [
      El({
        element: "img",
        className: "w-6 cursor-pointer",
        src: "/src/assets/images/cart.svg",
        eventListener: [
          {
            event: "click",
            callback: () => {
              Router().navigate(ROUTE.cart);
            },
          },
        ],
      }),
      El({
        element: "h1",
        innerText: localization.welcome,
      }),
      El({
        element: "img",
        className: "w-5 cursor-pointer",
        src: "/src/assets/images/home.svg",
        eventListener: [
          {
            event: "click",
            callback: () => {
              Router().navigate(ROUTE.home);
            },
          },
        ],
      }),
    ],
  });
};
