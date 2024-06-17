import React, { ReactNode } from "react"
import { Header } from "./Header"
import { Footer } from "./style"
import { Container } from "./style"

interface DefaultLayoutProps {
    children: ReactNode;
    isDashboard?: boolean;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, isDashboard }) => {
    return (
        <>
            <Header isDashboard={isDashboard} />
            <Container>{children}</Container>
            <Footer>
                <p>TASKM, designed & developed by Lucas Paulus - Dev.</p>
            </Footer>
        </>
    )
}
