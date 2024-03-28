import { PageLayout } from "../../layout";
import { El } from "../../utils/el";
import { CartProduct } from "./products";

export function Cart() {
  return El({
    element: "div",
    className: "w-full",
    children: [PageLayout(CartProduct)],
  });
}
