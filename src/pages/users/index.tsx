import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue,
} from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function UsersList() {
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

                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20px" />}
                        >
                            Criar novo
                        </Button>
                    </Flex>

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
                                {isWideVersion && <Th>Data de Cadastro</Th>}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td paddingX={['4', '4', '6']}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">
                                            Guilherme Magno
                                        </Text>
                                        <Text fontSize="sm" color="gray.300">
                                            guilherme.magno@exemplo.com
                                        </Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>15/06/2022</Td>}
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}
