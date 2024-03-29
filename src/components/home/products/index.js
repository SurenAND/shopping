import { fetchData } from "../../../library/axios";
import { El } from "../../../utils/el";
import { Card } from "../card/card";
import { Pagination } from "../pagination";
const perPage = localStorage.getItem("perPage");
const page = localStorage.getItem("page");
let searchParam = localStorage.getItem("searchParam");
const productList = await fetchData(
  "products",
  searchParam ? searchParam : "",
  page,
  perPage
);
export const Product = () => {
  function handleSearch(e) {
    e.preventDefault();
    const { searchInput } = e.target;
    localStorage.setItem("searchParam", searchInput.value);
    location.reload();
  }
  return El({
    element: "div",
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 pb-20",
    children: [
      El({
        element: "div",
        className:
          "flex items-center bg-white p-2 px-5 gap-1 rounded-md w-full",
        children: [
          El({
            element: "img",
            className:
              "cursor-pointer text-center items-center justify-center mr-2",
            id: "search",
            src: "./src/assets/images/search.svg",
            alt: "search",
          }),
          El({
            element: "form",
            eventListener: [
              {
                event: "submit",
                callback: handleSearch,
              },
            ],
            children: [
              El({
                element: "input",
                className:
                  "focus:outline-none focus:ring-0 border-none text-primary rounded bg-transparent placeholder:text-gray-400",
                type: "text",
                name: "searchInput",
                id: "search-input",
                placeholder: "Search",
              }),
            ],
          }),
        ],
      }),
      ...productList?.map((product) => {
        return Card(product);
      }),
      El({
        element: "div",
        className: "col-span-1 md:col-span-2 lg:col-span-3",
        children: [Pagination(productList, "1", "5")],
      }),
    ],
  });
};
