import React from "react";
import axios from "axios";
const FetchSearchData = (query) => {
  return axios.get(
    `
    https://wicked-long-underwear-slug.cyclic.app/products?q=${query}
      `
  );
};

export default FetchSearchData;
