import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Spinner,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine } from 'react-icons/ri'
import { useQuery } from 'react-query'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function UsersList() {
    const { data, isLoading, error } = useQuery(
        'users',
        async () => {
            const response = await fetch('http://localhost:3000/api/users')
            const data = await response.json()

            const users = data.users.map((user) => {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    createdAt: new Date(user.createdAt).toLocaleDateString(
                        'pt-BR',
                        {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                        }
                    ),
                }
            })

            return users
        },
        {
            staleTime: 1000 * 5, // five seconds
        }
    )

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

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
                    <Flex
                        marginBottom="8"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                        </Heading>

                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={
                                    <Icon as={RiAddLine} fontSize="20px" />
                                }
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter dados dos usuários</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th
                                            paddingX={['4', '4', '6']}
                                            color="gray.300"
                                            width="8"
                                        >
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>Usuário</Th>
                                        {isWideVersion && (
                                            <Th>Data de Cadastro</Th>
                                        )}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.map((user) => (
                                        <Tr key={user.id}>
                                            <Td paddingX={['4', '4', '6']}>
                                                <Checkbox colorScheme="pink" />
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Text fontWeight="bold">
                                                        {user.name}
                                                    </Text>
                                                    <Text
                                                        fontSize="sm"
                                                        color="gray.300"
                                                    >
                                                        {user.email}
                                                    </Text>
                                                </Box>
                                            </Td>
                                            {isWideVersion && (
                                                <Td>{user.createdAt}</Td>
                                            )}
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>

                            <Pagination />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}
