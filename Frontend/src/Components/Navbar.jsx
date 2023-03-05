import React, { useEffect, useState } from "react";
import { Image, img } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";
// import useAuth from "./../useAuth";
// import Link from "next/link";
// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase/firebase-config";
import styles from "../Styles/globals.css"
import { Button } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import DrawerBtn from "./DrawerBtn";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
// import { useSession, signOut } from "next-auth/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const currentUser = useAuth();
  // const { data } = useSession();
  // console.log(session);

  // const Logout = async () => {
  //   try {
  //     await signOut(auth);
  //     alert("Logout Successful");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div style={{ width: "100%", color: "white" }} className="navbar1">
        <a>Corporate Gifts</a>
        <a>Store Locator</a>
        <a>international Delivery</a>
      </div>
      <div className="navbar2">
        <img
          className="nav2img"
          src={"/logo1.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <img
          className="nav2img"
          src={"/logo2.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <img
          className="nav2img"
          src={"/logo3.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <img
          className="nav2img"
          src={"/logo4.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <img
          className="nav2img"
          src={"/logo5.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <img
          className="nav2img"
          src={"/logo6.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <img
          className="nav2img"
          src={"/logo7.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <img
          className="nav2img"
          src={"/logo8.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <img
          className="nav2img"
          src={"/logo9.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <img
          className="nav2img"
          src={"/logo10.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <img
          className="nav2img"
          src={"/logo11.svg"}
          alt="logo"
          width={80}
          height={80}
        />
        <img
          className="nav2img"
          src={"/logo4.svg"}
          alt="logo"
          width={80}
          height={80}
        />
      </div>
      <Flex
        px="5"
        py="3"
        bg="#65388b"s
       
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack gap="3">
          <DrawerBtn />
          
            {/* <Heading color="#fff">1800-Flowers</Heading> */}
          <Image src='https://i.postimg.cc/pLqmtY0m/Blossom-removebg-preview.png' w={'20'}/>
        </HStack>
        <HStack gap="3" cursor="pointer">
          <Input
            width="300px"
            bg="#fff"
            placeholder="Search..."
            display={{ base: "none", lg: "flex" }}
          />

          <HStack color="#fff" fontSize={"3xl"} gap="0">
            <VscAccount />
            <Box
              w="20"
              _hover={{ textDecoration: "underline" }}
              display={{ base: "none", md: "block" }}
            >
              <Box fontSize="sm" fontWeight="500">
                {/* {data?.user ? (
                  <>
                    <Text fontSize="xs">{data?.user?.email}</Text>
                    <Text onClick={() => signOut()}>Sign Out</Text>
                  </>
                ) : (
                  <Link to={"/login"}>
                    <Text>Login</Text>
                  </Link>
                )} */}
              </Box>
            </Box>
          </HStack>

          <Link href="/cart">
            <Flex fontSize={"3xl"} color="#fff" alignItems="center" gap="2">
              <FiShoppingCart />
              <Text fontSize={"sm"}>Cart</Text>
            </Flex>
          </Link>
        </HStack>
      </Flex>
      <Flex
        px="5"
        py="2"
        bg="#65388b"
        alignItems="center"
        display={{ base: "flex", lg: "none" }}
      >
        <Input bg="#fff" placeholder="Search..."></Input>
      </Flex>
    </>
  );
}

// export async function getStaticProps() {
//   const r = await fetch(`https://fine-erin-turkey-hose.cyclic.app/addtocart`);
//   const d = await r.json();
//   console.log("data", d);
//   return {
//     props: {
//       cartdata: d,
//     },
//   };
// }
