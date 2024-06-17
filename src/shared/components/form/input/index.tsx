import React, { useState } from "react"
import { useFormContext } from "react-hook-form"
import { FaRegEye as ShowPass } from "react-icons/fa6"
import { FaRegEyeSlash as HidePass } from "react-icons/fa6"
import * as S from "./style"

interface InputProps {
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    name: string;
    isPassword?: boolean;
    value?: string;
}

export const Input: React.FC<InputProps> = ({ type, placeholder, name, isPassword, ...rest }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()
    const [isShowPassword, setIsShowPassword] = useState(false)
    const tooglePassword = () => setIsShowPassword((prev) => !prev)

    return (
        <>
            {!isPassword ? (
                <S.Input
                    isError={!!errors[name]?.message}
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                    {...rest}
                />
            ) : (
                <S.InputPasswordWrapper>
                    <S.Input
                        isError={!!errors[name]?.message}
                        type={isShowPassword ? "text" : "password"}
                        placeholder={placeholder}
                        {...register(name)}
                        {...rest}
                    />
                    <S.IconWrapper className={"pass-icon"} onClick={tooglePassword}>
                        {isShowPassword ? <ShowPass /> : <HidePass />}
                    </S.IconWrapper>
                </S.InputPasswordWrapper>
            )}
        </>
    )
}
