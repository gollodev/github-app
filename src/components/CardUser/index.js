import React from 'react'

import {
    Box,
    Avatar,
    VStack,
    HStack,
    Text,
    Heading,
    Tag
} from '@chakra-ui/react'

export default function CardUser({ avatar, login, type, score }) {
    return (
        <Box 
            w={'100%'}
            h={'100%'}
            maxW={'sm'} 
            borderWidth={'1px'}
            borderRadius={'lg'} 
            overflow={'hidden'}
            p={4}
        >
            
            <VStack spacing={3} justifyContent={'center'}>
                <Avatar name={login} src={avatar} />
                <Heading as='h4' size='md'>
                    {login}
                </Heading>
                <HStack spacing={2}>
                    <Text fontSize='sm'>{type}</Text>
                    <Tag>{(parseFloat(score).toPrecision(2) >= 1.0) ? 'alto' : 'bajo'}</Tag>
                </HStack>
            </VStack>
        </Box>
    )
}

