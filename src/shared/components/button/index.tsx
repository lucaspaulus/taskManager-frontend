import { PrimaryButton, SecondaryButton } from "./style"
import React from "react"

interface ButtonProps {
    text: string;
    variant: "primary" | "secondary";
    maxWidth?: string;
    height?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, height, maxWidth, variant, ...rest }) => {
    return (
        <>
            {variant === "primary" ? (
                <PrimaryButton height={height} maxWidth={maxWidth} {...rest}>
                    {text}
                </PrimaryButton>
            ) : (
                <SecondaryButton height={height} maxWidth={maxWidth} {...rest}>
                    {text}
                </SecondaryButton>
            )}
        </>
    )
}
