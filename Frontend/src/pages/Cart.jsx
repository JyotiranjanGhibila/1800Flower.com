import { Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
// import axios from "axios";

export const Cart = () => {
  useEffect(() => {
    const getData = async () => {
      await fetch("https://wicked-long-underwear-slug.cyclic.app/cart/", {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      // await axios
      //   .get("https://wicked-long-underwear-slug.cyclic.app/cart/")
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <div>
      <Heading>Cart Page</Heading>
      <Heading>protected</Heading>
    </div>
  );
};
