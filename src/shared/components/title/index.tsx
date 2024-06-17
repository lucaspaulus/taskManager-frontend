import React, { ReactNode } from "react"
import * as S from "./style"

interface TitleProps {
    children: ReactNode;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Title: React.FC<TitleProps> = ({ children, tag }) => {
    return <S.Title as={tag}>{children}</S.Title>
}
