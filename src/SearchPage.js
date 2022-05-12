import React, { useState } from 'react'
import axios from 'axios'

import { 
    Box, 
    Input,
    Container,
    HStack,
    VStack,
    Spinner,

} from '@chakra-ui/react'

import CardUser from './components/CardUser'
import AlertMessage from './components/Alert'

const baseUrl = 'https://api.github.com/search'

export default function SearchPage() {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState({
        show: false,
        title: '',
        description: ''
    })
    const [text, setText] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const setData = (value) => {
        setText(value)
        if (value.length > 2) {
            search(value)
        } else {
            setErrorMessage({ 
                status: 'info',
                show: true, 
                title: 'Info',
                description: 'You need 3 letters for search' 
            })
        }
    }

    const search = async (value) => {

            try {
                setLoading(true)
                const findUser = await axios.get(`${baseUrl}/users?q=${value}`)
                if (findUser.status === 200) {
                    setSearchResults(findUser.data.items)
                    setText('')
                    setLoading(false)
                    setErrorMessage({ show: false })
                } else {
                    setErrorMessage({ 
                        show: true, 
                        title: 'not found', 
                        description: 'user not found in server' 
                    })
                    setText('')
                    setLoading(false)
                }
            } catch (error) {
                setErrorMessage({ 
                    show: true, 
                    title: 'Server Error', 
                    description: error.message 
                })
                setText('')
                setLoading(false)
            }
        
    }

    return (
        <Container>
            {
                errorMessage.show && (
                    <AlertMessage
                        title={errorMessage.title}
                        description={errorMessage.description}
                        status={errorMessage.status}
                    />
                )
            }
            <HStack justifyContent={'center'}>
                <Box
                    w={'100%'}
                    h={'100%'}
                    maxW={'sm'}
                >
                    <Input 
                        placeholder='Search User' 
                        value={text} 
                        onChange={e => setData(e.target.value)} 
                    />
                </Box>
            </HStack>
            <Box marginTop={5}>
                {loading && (<Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />)}
                <VStack spacing={2}>
                {
                    searchResults.map((result) => (
                        <CardUser
                            key={result.id}
                            avatar={result.avatar_url}
                            login={result.login}
                            type={result.type}
                            score={result.score}
                        />
                    ))
                }
                </VStack>
            </Box>
        </Container>
    )
}
