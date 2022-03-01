import {Box, Text} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import {Table, Tbody, Td, Tr} from "@chakra-ui/react";

import React from 'react';

const CardDisplay = ({cardDetails}) => {
    return (

        <Box>
            <Table>
                <Tr>
                    <Tbody justifyContent="space-between" spacing={4}>
                        <Td>
                            <Image w={"16.3vw"} h={"16.3vw"} src={cardDetails.url} />
                            <Td w={"10vw"} h={"10vw"} >
                                <Text fontSize="24px" fontWeight="bold">{cardDetails.id}</Text>
                                <Text fontSize="12px" color="gray" >{cardDetails.title}</Text>
                            </Td>
                        </Td>
                    </Tbody>
                </Tr>
            </Table>
        </Box>

    )
}

export default CardDisplay;