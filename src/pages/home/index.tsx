import { useEffect } from "react"
import { DefaultLayout } from "../../shared/layouts/defaultLayout/"
import { Container } from "./style"
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const isLogged = localStorage.getItem("data")
        if (isLogged) {
            navigate("/dashboard")
        }
    }, [navigate])

    return (
        <DefaultLayout>
            <Container>
                <h1>Gerencie Suas Tarefas com Facilidade</h1>
                <p>
                    Faça mais, se preocupe menos. Simplifique sua vida com nossa plataforma
                    intuitiva de gerenciamento de tarefas. Organize, acompanhe e conclua suas
                    tarefas com facilidade. Experimente agora!
                </p>
            </Container>
        </DefaultLayout>
    )
}
