import { El } from "../../utils/el";

export const Footer = () => {
  return El({
    element: "div",
    className:
      "bg-blue-500 text-white p-3 text-center font-semibold text-xl w-full flex gap-5 justify-center",
    // innerText: "Footer",
    children: [
      El({
        element: "h3",
        innerText: "Address",
      }),
      El({
        element: "h3",
        innerText: "Social Media",
      }),
    ],
  });
};
