import { El } from "../utils/el";

export function NotFoundPage() {
  return El({
    element: "div",
    className: "bg-gray-500",
    innerText: "Page Not Found!",
  });
}
