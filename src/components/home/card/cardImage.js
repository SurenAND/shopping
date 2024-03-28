import { El } from "../../../utils/el";

export const CardImage = (product) => {
  return El({
    element: "div",
    className: "w-48 flex justify-center items-center p-3",
    children: [
      El({
        element: "img",
        className: "w-full rounded-lg",
        src: product.image,
        alt: product.model,
      }),
    ],
  });
};
