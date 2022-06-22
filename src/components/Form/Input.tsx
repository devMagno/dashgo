import { forwardRef, ForwardRefRenderFunction } from 'react'
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
    name: string
    label?: string
    error?: FieldError
}

const BaseInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, label, error, ...props }: InputProps,
    ref
) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChakraInput
                name={name}
                id={name}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgColor: 'gray.900',
                }}
                size="lg"
                ref={ref}
                {...props}
            />

            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    )
}

export const Input = forwardRef(BaseInput)
