import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    SimpleGrid,
    Stack,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

type CreateUserFormData = {
    name: string
    email: string
    password: string
    password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório.'),
    email: yup
        .string()
        .required('E-mail é obrigatório.')
        .email('Insira um e-mail válido.'),
    password: yup
        .string()
        .required('Senha é obrigatória.')
        .min(8, 'A senha deve ter no mínimo 8 caracteres'),
    password_confirmation: yup
        .string()
        .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema),
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
        values
    ) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
    }

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

                <Box
                    as="form"
                    flex="1"
                    padding={['6', '8']}
                    borderRadius="8"
                    bgColor="gray.800"
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading fontSize="lg" fontWeight="normal">
                        Criar usuário
                    </Heading>

                    <Divider marginY="6" borderColor="gray.600" />

                    <Stack spacing={['6', '8']}>
                        <SimpleGrid
                            spacing={['6', '8']}
                            width="100%"
                            minChildWidth="240px"
                        >
                            <Input
                                name="name"
                                label="Nome completo"
                                error={formState.errors.name}
                                {...register('name')}
                            />

                            <Input
                                name="email"
                                type="email"
                                label="E-mail"
                                error={formState.errors.email}
                                {...register('email')}
                            />
                        </SimpleGrid>

                        <SimpleGrid
                            spacing={['6', '8']}
                            width="100%"
                            minChildWidth="240px"
                        >
                            <Input
                                name="password"
                                type="password"
                                label="Senha"
                                error={formState.errors.password}
                                {...register('password')}
                            />
                            <Input
                                name="password_confirmation"
                                type="password"
                                label="Confirmação de senha"
                                error={formState.errors.password_confirmation}
                                {...register}
                            />
                        </SimpleGrid>
                    </Stack>

                    <Flex marginTop="8" justifyContent="flex-end">
                        <Stack direction="row" spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button
                                type="submit"
                                colorScheme="pink"
                                isLoading={formState.isSubmitting}
                            >
                                Salvar
                            </Button>
                        </Stack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
