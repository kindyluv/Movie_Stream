import React, {useState} from 'react';
import {
    Box,
    Button, Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalOverlay, Stack,
    useDisclosure,
    VStack
} from "@chakra-ui/react";


const LoginMotherBoard = () => {

        const { isOpen, onOpen, onClose} = useDisclosure()

    const initialState = {
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
                <Button h={"4vh"} borderRadius={"4px"} bgColor={"white"} w={"5vw"} border={"unset"} onClick={onOpen}>Login</Button>
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
                                <Stack pt={"10vh"} ml={"5vw"} pt={"14vh"} mb={"3vh"} isRequired isInvalid={isError}>
                                    <Input
                                        w={"15vw"}
                                        borderRadius={"4px"}
                                        mr={"2vw"}
                                        mb={"2vw"}
                                        h={"5vh"}
                                        id='email'
                                        type='email'
                                        variant="flushed"
                                        placeholder="email"
                                        value={input.email}
                                        onChange={handleInputChange}
                                        border={"unset"}
                                    />

                                    <Input
                                        w={"15vw"}
                                        borderRadius={"4px"}
                                        mr={"2vw"}
                                        mb={"2vh"}
                                        id='password'
                                        type='password'
                                        h={"5vh"}
                                        variant='flushed' placeholder='Password'
                                        value={input.password}
                                        onChange={handleInputChange}
                                        border={"unset"}
                                    />
                                </Stack>
                            </form>

                            <Button ml={"10vw"} borderRadius={"4px"} h={"4vh"} w={"5vw"} border="unset" onSubmit={handleSubmit} onClick={onClose} colorScheme='red'>Submit</Button>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        {/*<Box mr={"34vw"} w={"10vw"} h={"12vh"}>*/}
                        {/*    <Button h={"4vh"} borderRadius={"4px"} bgColor={"white"} w={"5vw"} border={"unset"} colorScheme='blue' onClick={onClose}>*/}
                        {/*        Close*/}
                        {/*    </Button>*/}
                        {/*</Box>*/}

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </VStack>
    );
};

export default LoginMotherBoard;
