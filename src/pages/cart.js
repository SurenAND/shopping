import { Cart } from "../components/cart";
import { El } from "../utils/el";

export function CartPage() {
  return El({
    element: "div",
    className: "bg-gray-500",
    children: [Cart()],
  });
}
