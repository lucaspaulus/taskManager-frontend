import { ReactNode } from "react"
import { Container } from "./style"

interface AccountLayoutProps {
    children: ReactNode;
}
const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
    return <Container>{children}</Container>
}

export default AccountLayout
