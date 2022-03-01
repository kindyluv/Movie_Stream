import React from 'react';
import {HStack} from "@chakra-ui/react";
import RegisterMotherBoard from "./RegisterMotherBoard";
import LoginMotherBoard from "./LoginMotherBoard";

const BG = () => {
    return (
        <HStack ml={"1.5vw"} justifyContent={"center"} alignItems={"center"} display={"flex"} h={"100%"} w={"98.3vw"} bgColor={"#000814"}>
            <RegisterMotherBoard/>
            <LoginMotherBoard/>
        </HStack>
    );
};

export default BG;
