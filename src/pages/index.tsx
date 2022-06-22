import { Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

type SignInFormData = {
    email: string
    password: string
}

const signInFormSchema = yup.object().shape({
    email: yup.string().required("E-mail é obrigatório.").email("Insira um e-mail válido."),
    password: yup.string().required("Senha é obrigatória."),
})

export default function SignIn() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signInFormSchema),
    })

    const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
    }

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
                onSubmit={handleSubmit(handleSignIn)}
            >
                <Stack spacing="4">
                    <Input
                        name="email"
                        type="email"
                        label="E-mail"
                        inputMode="email"
                        error={formState.errors.email}
                        {...register('email')}
                    />

                    <Input
                        name="password"
                        type="password"
                        label="Senha"
                        error={formState.errors.password}
                        {...register('password')}
                    />
                </Stack>

                <Button
                    type="submit"
                    mt="6"
                    colorScheme="pink"
                    size="lg"
                    isLoading={formState.isSubmitting}
                >
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}
