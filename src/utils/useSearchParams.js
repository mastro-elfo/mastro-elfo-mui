import { useLocation } from "react-router-dom";

import reducer from "./reduceSearchParams";

export default function useSearchParams() {
  const { search } = useLocation();
  return reducer(search);
}
