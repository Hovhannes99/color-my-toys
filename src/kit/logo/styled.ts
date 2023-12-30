import styled from "styled-components";
import logo from "@/assets/icons/logo.svg"
import secondaryLogo from "@/assets/icons/secondary-logo.svg"

export const Logo = styled.img.attrs(() => ({
    src: logo,
}))`
    cursor: pointer;
`
export const SecondaryLogo = styled.img.attrs(() => ({
    src: secondaryLogo,
}))``