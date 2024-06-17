import React, { ReactNode } from "react"
import * as S from "./style"

interface TextProps {
    children: ReactNode;
    size?: string;
}

export const Text: React.FC<TextProps> = ({ children, size }) => {
    return <S.Text size={size}>{children}</S.Text>
}
