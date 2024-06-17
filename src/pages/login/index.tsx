//React
import { useEffect } from "react"

//router-dom
import { Link, useNavigate } from "react-router-dom"

//schemas
import { loginSchema, LoginSchemaType } from "../../shared/schemas/loginSchema"

//Services
import { loginService } from "../../shared/services/api/loginService"

//Components
import AccountLayout from "../../shared/layouts/accountLayout"
import { Button, ToogleTheme, Logo, Form, Title, Text } from "../../shared/components/"

//Utils
import { toast } from "react-toastify"
import { zodResolver } from "@hookform/resolvers/zod"

//Hooks
import { useForm, FormProvider } from "react-hook-form"

export const Login: React.FC = () => {
    const createLoginForm = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
    })
    const {
        handleSubmit,
        formState: { errors },
    } = createLoginForm

    const navigate = useNavigate()

    useEffect(() => {
        const isLogged = localStorage.getItem("data")
        if (isLogged) {
            navigate("/dashboard")
        }
    }, [navigate])

    const loginUser = async (data: LoginSchemaType) => {
        const login = await loginService(data)

        if (login) {
            localStorage.setItem("data", JSON.stringify(login.data))
            toast.success("Logado com sucesso!!!")
            navigate("/dashboard")
        }
    }

    return (
        <AccountLayout>
            <FormProvider {...createLoginForm}>
                <Form onSubmit={handleSubmit(loginUser)}>
                    <ToogleTheme className="mode-theme-icon" />
                    <Logo cursorPointer classname="logo-form" onClick={() => navigate("/")} />
                    <Title tag="h1">Conecte-se</Title>
                    <Form.input name="email" type="email" placeholder="Insira seu email" />
                    <Form.errorMessage error={errors.email} />

                    <Form.input name="password" isPassword placeholder="Insira sua senha" />

                    <Form.errorMessage error={errors.password} />

                    <Button variant="primary" text="Login" />
                    <Text>
                        Não tem uma conta?
                        <Link className="create-account" to="/register">
                            Criar conta
                        </Link>
                    </Text>
                </Form>
            </FormProvider>
        </AccountLayout>
    )
}
