import React from "react"
import { FieldError } from "react-hook-form"
import * as S from "./style"
interface ErrorMessageProps {
    error: FieldError | undefined;
}
export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
    return <>{error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}</>
}
