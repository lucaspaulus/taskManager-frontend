import { useAppTheme } from "../../hooks/useAppContext";
import { MdModeNight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Container } from "./style";
import React from "react";

interface ToogleThemeProps {
    className?: string;
}
export const ToogleTheme: React.FC<ToogleThemeProps> = ({ className }) => {
    const { themeName, toggleTheme } = useAppTheme();

    return (
        <Container>
            {themeName === "dark" ? (
                <MdLightMode className={className} onClick={toggleTheme} />
            ) : (
                <MdModeNight className={className} onClick={toggleTheme} />
            )}
        </Container>
    );
};
