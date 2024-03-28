import { Cart } from "../components/cart";
import { El } from "../utils/el";

export function CartPage() {
  return El({
    element: "div",
    className: "",
    children: [Cart()],
  });
}
