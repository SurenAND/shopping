import { El } from "../../../utils/el";
import { CartCardImage } from "./cardImage";
import { CartCardInfo } from "./cardInfo";

export const CartCard = (product) => {
  return El({
    element: "div",
    className: "flex bg-white rounded-lg shadow",
    children: [CartCardImage(product), CartCardInfo(product)],
  });
};
