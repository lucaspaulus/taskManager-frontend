import { ReactNode } from "react"
import { Container } from "./style"
import { Input } from "./input"
import { ErrorMessage } from "./errorMessage"

interface FormProps {
    children: ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface FormCompound {
    input: typeof Input;
    errorMessage: typeof ErrorMessage;
}

export const Form: React.FC<FormProps> & FormCompound = ({ children, onSubmit }) => {
    return <Container onSubmit={onSubmit}>{children}</Container>
}

Form.input = Input
Form.errorMessage = ErrorMessage
