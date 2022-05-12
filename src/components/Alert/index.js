import React from 'react'

import { 
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
} from '@chakra-ui/react'

export default function AlertMessage({ title, description, status }) {
  return (
    <Alert status={status === 'info' ? 'info' : 'error'} mb={4}>
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}
