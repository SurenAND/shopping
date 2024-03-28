import { El } from "../../utils/el";

export const Header = () => {
  return El({
    element: "div",
    className:
      "bg-blue-500 text-white p-5 text-center font-semibold uppercase text-3xl",
    innerText: "Welcome to our shop",
  });
};
