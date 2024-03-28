import { El } from "../utils/el";
import { Footer } from "./footer";
import { Header } from "./header";

export const PageLayout = (main) => {
  return El({
    element: "div",
    className: "bg-gray-300 w-full",
    children: [Header(), main(), Footer()],
  });
};
