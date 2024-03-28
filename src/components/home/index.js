import { PageLayout } from "../../layout";
import { Router } from "../../routes";
import { El } from "../../utils/el";
import { Product } from "./products";

export function Home() {
  return El({
    element: "div",
    className: "w-full",
    children: [PageLayout(Product)],
  });
}
