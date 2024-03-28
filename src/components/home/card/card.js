import { El } from "../../../utils/el";
import { CardImage } from "./cardImage";
import { CardInfo } from "./cardInfo";

export const Card = (product) => {
  return El({
    element: "div",
    className: "flex bg-white rounded-lg shadow",
    children: [CardImage(product), CardInfo(product)],
  });
};
