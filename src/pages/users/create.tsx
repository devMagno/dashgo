import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    SimpleGrid,
    Stack,
} from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export default function CreateUser() {
    return (
        <Box>
            <Header />
            <Flex
                width="100%"
                marginY="6"
                marginX="auto"
                paddingX="6"
                maxWidth="1480px"
            >
                <Sidebar />

                <Box flex="1" padding="8" borderRadius="8" bgColor="gray.800">
                    <Heading fontSize="lg" fontWeight="normal">
                        Criar usuário
                    </Heading>

                    <Divider marginY="6" borderColor="gray.600" />

                    <Stack spacing="8">
                        <SimpleGrid
                            spacing="8"
                            width="100%"
                            minChildWidth="240px"
                        >
                            <Input name="name" label="Nome completo" />
                            <Input name="email" type="email" label="E-mail" />
                        </SimpleGrid>

                        <SimpleGrid
                            spacing="8"
                            width="100%"
                            minChildWidth="240px"
                        >
                            <Input
                                name="password"
                                type="password"
                                label="Senha"
                            />
                            <Input
                                name="password_confirmation"
                                type="password"
                                label="Confirmação de senha"
                            />
                        </SimpleGrid>
                    </Stack>

                    <Flex marginTop="8" justifyContent="flex-end">
                        <Stack direction="row" spacing="4">
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="pink">Salvar</Button>
                        </Stack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
