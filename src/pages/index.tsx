import { Button, Flex, Stack } from '@chakra-ui/react'

import { Input } from '../components/Form/Input'

export default function SignIn() {
    return (
        <Flex
            width="100vw"
            height="100vh"
            alignItems="center"
            justifyContent="center"
        >
            <Flex
                as="form"
                padding="8"
                width="100"
                maxWidth="360px"
                flexDir="column"
                borderRadius="8"
                bgColor="gray.800"
            >
                <Stack spacing="4">
                    <Input
                        name="email"
                        type="email"
                        label="E-mail"
                        inputMode="email"
                    />

                    <Input name="password" type="password" label="Senha" />
                </Stack>

                <Button type="submit" mt="6" colorScheme="pink" size="lg">
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}
