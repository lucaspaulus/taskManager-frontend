import React from "react"
import { Container, GroupItems } from "./style"
import { useNavigate } from "react-router-dom"
import { ToogleTheme } from "../../../components/toogleTheme"
import { Button } from "../../../components/button"
import Logo from "../../../components/logo"

interface HeaderProps {
    isDashboard?: boolean;
}
export const Header: React.FC<HeaderProps> = ({ isDashboard }) => {
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem("data")
        navigate("/login")
    }

    return (
        <Container>
            <Logo />
            <GroupItems>
                {!isDashboard ? (
                    <>
                        <Button
                            variant="primary"
                            text="Entrar"
                            onClick={() => navigate("/login")}
                            maxWidth="10"
                            height="2.4"
                        />
                        <Button
                            variant="secondary"
                            text="Criar Conta"
                            onClick={() => navigate("/register")}
                            maxWidth="10"
                            height="2.4"
                        />
                    </>
                ) : (
                    <Button
                        variant="primary"
                        text="Sair"
                        onClick={logOut}
                        maxWidth="10"
                        height="2.4"
                    />
                )}
                <ToogleTheme className="icon-theme-mode" />
            </GroupItems>
        </Container>
    )
}
