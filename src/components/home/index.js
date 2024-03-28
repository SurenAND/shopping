import { Router } from "../../routes";
import { El } from "../../utils/el";

export function Home() {
  return El({
    element: "div",
    className: "bg-red-300",
    innerText: "Go to cart",
    eventListener: [
      {
        event: "click",
        callback: () => {
          Router().navigate("/cart");
        },
      },
    ],
  });
}
