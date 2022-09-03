import React from "react";

import loader from "@assets/images/gifs/Loader.gif";
import { Flex } from "@shared/index";
import { Image } from "@atoms/index";
import Heading from "@shared/Title/Title";

const Loader = () => {
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <Image width={"64px"} src={loader} alt={"Loading..."} />
      <Heading level={2}>Loading...</Heading>
    </Flex>
  )
}

export default Loader;