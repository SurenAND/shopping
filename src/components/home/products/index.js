import { fetchData } from "../../../library/axios";
import { El } from "../../../utils/el";
import { Card } from "../card/card";
import { Pagination } from "../pagination";
const perPage = localStorage.getItem("perPage");
const page = localStorage.getItem("page");
const productList = await fetchData("products", page, perPage);
export const Product = () => {
  return El({
    element: "div",
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 pb-20",
    children: [
      ...productList?.data?.map((product) => {
        return Card(product);
      }),
      El({
        element: "div",
        className: "col-span-1 md:col-span-2 lg:col-span-3",
        children: [Pagination(productList, page, perPage)],
      }),
    ],
  });
};
