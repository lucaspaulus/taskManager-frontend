import styled from "styled-components"

interface TextStyledProps {
    size?: string;
}
export const Text = styled.p<TextStyledProps>`
    margin-top: 15px;
    text-align: center;
    color: ${({ theme }) => theme.defaultTextColor};
    font-weight: 400;
    font-size: ${({ size }) => (size ? `${size}rem` : "1.2rem")};
`
