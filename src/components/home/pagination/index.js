import { El } from "../../../utils/el";
export const Pagination = (data, page, perPage) => {
  let start = (data.next ? data.next - 2 : data.last - 1) * perPage + 1;
  let end = start + data.data.length - 1;

  localStorage.setItem("page", "1");
  localStorage.setItem("perPage", "3");
  const selected = localStorage.getItem("selectedIndex");
  function setPerPageToLS(e) {
    localStorage.setItem("perPage", e.target.value);
    localStorage.setItem("selectedIndex", e.target.selectedIndex);
    location.reload();
  }
  function nextPage() {
    !!data.next && localStorage.setItem("page", ++page);
    location.reload();
  }
  function prevPage() {
    !!data.prev && localStorage.setItem("page", --page);
    location.reload();
  }
  return El({
    element: "div",
    className: "w-full flex justify-center p-3 select-none",
    id: "paginate",
    children: [
      El({
        element: "div",
        className: "flex gap-12 items-center justify-center",
        children: [
          // Products per page
          El({
            element: "div",
            className: "flex gap-3 items-center justify-center",
            children: [
              El({
                element: "span",
                innerText: "Products per page:",
              }),
              El({
                element: "select",
                className:
                  "outline-none py-1 px-2 cursor-pointer font-bold border border-gray-500 rounded-lg bg-transparent",
                eventListener: [
                  {
                    event: "change",
                    callback: setPerPageToLS,
                  },
                ],
                children: [
                  El({
                    element: "option",
                    value: "3",
                    innerText: "3",
                  }),
                  El({
                    element: "option",
                    value: "6",
                    innerText: "6",
                  }),
                  El({
                    element: "option",
                    value: "9",
                    innerText: "9",
                  }),
                  El({
                    element: "option",
                    value: "12",
                    innerText: "12",
                  }),
                  El({
                    element: "option",
                    value: "15",
                    innerText: "15",
                  }),
                ],
              }),
            ],
          }),
          // from - to of total
          El({
            element: "div",
            className: "text-sm",
            children: [
              El({
                element: "span",
                className: "font-medium mx-1",
                innerText: start,
              }),
              "-",
              El({
                element: "span",
                className: "font-medium mx-1",
                innerText: end,
              }),
              "of",
              El({
                element: "span",
                className: "font-medium mx-1",
                innerText: data?.items,
              }),
            ],
          }),
          // prev and next
          El({
            element: "div",
            className: "flex justify-center gap-5",
            children: [
              El({
                element: "img",
                className: "cursor-pointer",
                id: "prev",
                src: "./src/assets/images/chevron-l.svg",
                alt: "chevron-l",
                eventListener: [
                  {
                    event: "click",
                    callback: prevPage,
                  },
                ],
              }),
              El({
                element: "img",
                className: "cursor-pointer",
                id: "next",
                src: "./src/assets/images/chevron-r.svg",
                alt: "chevron-r",
                eventListener: [
                  {
                    event: "click",
                    callback: nextPage,
                  },
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
