import { Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, getProductsData } from "./../store/App/app.actions";

// export const Products = () => {

//   return (
//     <div>
//       <Heading>Men's Page</Heading>
//       {products.map((el, ind) => (
//         <HStack key={ind} my={5}>
//           <Heading as={"h6"} key={ind}>
//             {el.name}
//           </Heading>
//           <Button onClick={() => handleAddToCart(el)}>Add To Cart</Button>
//         </HStack>
//       ))}
//     </div>
//   );
// };

import {
  Flex,
  Circle,
  Box,
  img,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const data = {
  isNew: true,
  imgURL:
    "https://imgs.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

export const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, products } = useSelector((store) => store.app);

  useEffect(() => {
    dispatch(getProductsData());
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  console.log(isLoading, isError, products);

  if (isLoading) return <Spinner />;
  else if (isError) {
    <Heading>Error.....</Heading>;
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]}>
        {products.map((el, ind) => (
          <SimpleGrid
            key={ind}
            minChildWidth="120px"
            spacing="40px"
            p={50}
            // w="full"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              bg={"white"}
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
            >
              {data.isNew && (
                <Circle
                  size="10px"
                  position="absolute"
                  top={2}
                  right={2}
                  bg="red.200"
                />
              )}

              <img
                src={el.img}
                alt={`Picture of ${data.name}`}
                roundedTop="lg"
              />

              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  {data.isNew && (
                    <Badge
                      rounded="full"
                      px="2"
                      fontSize="0.8em"
                      colorScheme="red"
                    >
                      New
                    </Badge>
                  )}
                </Box>
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {el.name}
                  </Box>
                  <div onClick={() => handleAddToCart(el)}>
                    <Tooltip
                      label="Add to cart"
                      bg="white"
                      placement={"top"}
                      color={"gray.800"}
                      fontSize={"1.2em"}
                    >
                      <chakra.a href={"#"} display={"flex"}>
                        <Icon
                          as={FiShoppingCart}
                          h={7}
                          w={7}
                          alignSelf={"center"}
                        />
                      </chakra.a>
                    </Tooltip>
                  </div>
                </Flex>

                <Flex flexDirection={"column"} alignContent="center">
                  {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
                  <Box display={"flex"}>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </Box>
                  <Box
                    fontSize="2xl"
                    color={"white"}
                    textAlign="right"
                  >
                    <Box
                      as="span"
                      color={"gray.600"}
                      fontWeight={400}
                      fontSize="2xl"
                    >
                      ₹{el.price.toFixed(2)}
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </SimpleGrid>
        ))}
      </SimpleGrid>
    </>
  );
};
