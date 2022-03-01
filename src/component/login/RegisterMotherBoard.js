import React, {useState} from 'react';
import {
    Box,
    Button, FormControl, FormLabel, HStack, Input,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Stack,
    useDisclosure, VStack
} from "@chakra-ui/react";



const RegisterMotherBoard = () => {
    const { isOpen, onOpen, onClose} = useDisclosure()

    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",

    };
    const [input, setInput] = useState(initialState)

    const handleInputChange = (e) => setInput(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        // location.assign("")
        console.log(handleInputChange(e))

    }
    const isError = input === ''


    return (
            <VStack h={"100vh"}>
                <Box  mt={"20vh"} w={"10vw"} h={"12vh"}>
                    <Button h={"4vh"} borderRadius={"4px"} bgColor={"#70e000"} w={"5vw"} border={"unset"} onClick={onOpen}>Register</Button>
                </Box>
                <Modal mb={"3vh"}
                       isCentered
                       onClose={onClose}
                       isOpen={isOpen}
                       motionPreset='slideInBottom'
                >
                    <ModalOverlay />
                    <ModalContent>
                        {/*<ModalHeader ml={"20vw"} mt={"30vh"} mb={"-25vw"}>SignIn Page</ModalHeader>*/}
                        {/*<ModalCloseButton />*/}
                        <ModalBody>
                            <Box borderRadius={"10px"}  mb={"5vh"} ml={"37vw"} bg='grey' w={"25vw"}  mt={"30vh"} h={"52vh"}>
                                {/*<VStack ml={"50vw"}>*/}
                                <form onSubmit={handleSubmit}>
                                    <Stack space={4} ml={"5vw"} mb={"1.5vh"} isRequired isInvalid={isError}>
                                        <Input
                                            w={"15vw"}
                                            mt={"5vh"}
                                            mb={"3vh"}
                                            mr={"2vw"}
                                            id='firstName'
                                            type='text'
                                            h={"5vh"}
                                            placeholder={"First Name"}
                                            borderRadius="5px"
                                            value={input.firstName}
                                            border={"unset"}
                                            onChange={handleInputChange}
                                        />
                                        <Box pb={"3vh"}>
                                            <Input
                                                w={"15vw"}

                                                mr={"2vw"}
                                                id='lastName'
                                                type='text'
                                                h={"5vh"}
                                                placeholder={"Last Name"}
                                                borderRadius="5px"
                                                value={input.lastName}
                                                onChange={handleInputChange}
                                                border={"unset"}
                                            />
                                        </Box>

                                        <Box pb={"3vh"}>
                                            <Input
                                                w={"15vw"}
                                                mr={"2vw"}
                                                id='email'
                                                type='email'
                                                h={"5vh"}
                                                placeholder={"Email"}
                                                borderRadius="5px"
                                                value={input.email}
                                                onChange={handleInputChange}
                                                border={"unset"}
                                            />
                                        </Box>

                                        <Input
                                            w={"15vw"}
                                            mr={"2vw"}
                                            mb={"2vh"}
                                            id='password'
                                            type='password'
                                            placeholder={"Password"}
                                            h={"5vh"}
                                            borderRadius="5px"
                                            value={input.password}
                                            onChange={handleInputChange}
                                            border={"unset"}
                                        />
                                    </Stack>
                                </form>

                                <Button mt={"2vh"} ml={"10vw"} borderRadius={"4px"} h={"4vh"} w={"5vw"} border="unset" onSubmit={handleSubmit} onClick={onClose} colorScheme='red'>Submit</Button>

                                {/*</VStack>*/}
                            </Box>
                        </ModalBody>
                        <ModalFooter>
                            {/*<Box mr={"34vw"} w={"10vw"} h={"12vh"}>*/}
                            {/*    <Button h={"4vh"} borderRadius={"4px"} bgColor={"#70e000"} w={"5vw"} border={"unset"} colorScheme='blue' onClick={onClose}>*/}
                            {/*        Close*/}
                            {/*    </Button>*/}
                            {/*</Box>*/}

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </VStack>
    );
};

export default RegisterMotherBoard;
