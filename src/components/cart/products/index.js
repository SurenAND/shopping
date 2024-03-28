import { fetchData } from "../../../library/axios";
import { El } from "../../../utils/el";
import { CartCard } from "../card/card";
const productList = await fetchData("cart");
export const CartProduct = () => {
  return El({
    element: "div",
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5",
    children: [
      ...productList.map((product) => {
        return CartCard(product);
      }),
    ],
  });
};
