//React
import React from "react"

//Router dom
import { Link, useNavigate } from "react-router-dom"

//Hooks
import { useForm, FormProvider } from "react-hook-form"

//Components
import AccountLayout from "../../shared/layouts/accountLayout"
import { Button, Form, Logo, ToogleTheme, Title, Text } from "../../shared/components"
//Services
import { registerUserService } from "../../shared/services/api/registerService"

//Utils
import { zodResolver } from "@hookform/resolvers/zod"

//Schemas
import { userSchema, UserSchemaType } from "../../shared/schemas/userSchema"
import { toast } from "react-toastify"

export const Register: React.FC = () => {
    const createUserForm = useForm<UserSchemaType>({
        resolver: zodResolver(userSchema),
    })

    const {
        handleSubmit,
        formState: { errors },
    } = createUserForm
    const navigate = useNavigate()

    const createUser = async (data: UserSchemaType) => {
        const response = await registerUserService(data)
        if (response.success) {
            toast.success("Conta criada com sucesso!!!")
            navigate("/login")
        }
    }

    return (
        <AccountLayout>
            <FormProvider {...createUserForm}>
                <Form onSubmit={handleSubmit(createUser)}>
                    <ToogleTheme className="mode-theme-icon" />
                    <Logo cursorPointer classname="logo-form" onClick={() => navigate("/")} />
                    <Title tag="h1">Registre-se</Title>
                    <Form.input name="name" type="text" placeholder="Insira o seu nome" />
                    <Form.errorMessage error={errors.name} />

                    <Form.input name="email" type="email" placeholder="Insira seu email" />
                    <Form.errorMessage error={errors.email} />

                    <Form.input name="password" isPassword placeholder="Insira sua senha" />
                    <Form.errorMessage error={errors.password} />

                    <Button variant="primary" text="Registrar" />
                    <Text>
                        Já tem uma conta?
                        <Link className="create-account" to="/login">
                            Entrar
                        </Link>
                    </Text>
                </Form>
            </FormProvider>
        </AccountLayout>
    )
}
