import { addDataToApi } from "../../../library/axios";
import { El } from "../../../utils/el";

export const CardInfo = (product) => {
  return El({
    element: "div",
    className: "flex-auto pt-6 px-3 flex flex-col justify-between",
    children: [
      El({
        element: "div",
        className: "flex flex-wrap",
        children: [
          El({
            element: "h1",
            className: "flex-auto text-xl font-semibold",
            innerText: product?.model,
          }),
          El({
            element: "h4",
            className: "text-xl font-semibold text-gray-500",
            innerText: `$${product?.price}`,
          }),
          El({
            element: "h5",
            className: "w-full mt-2 text-sm font-medium",
            innerText: product?.brand,
          }),
        ],
      }),
      El({
        element: "button",
        className:
          "mb-4 bg-btn py-2 text-white w-full rounded-md shadow hover:bg-secondary cursor-pointer",
        innerText: "Buy Now!",
        eventListener: [
          {
            event: "click",
            callback: () => {
              addDataToApi("cart", product);
            },
          },
        ],
      }),
    ],
  });
};
