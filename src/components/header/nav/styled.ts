import styled from "styled-components"
import {NavLink as N} from "react-router-dom";
import {ContainedButton} from "@/kit/buttons/styled.ts";

type ButtonType = {
   $isActive:boolean
}

export const Nav = styled.nav`
   width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NavWrapper = styled.div`
   display: flex;
   column-gap: 1.5rem;
   padding-left: 10%;
   @media screen and (${({ theme }) => theme.breakpoints.sm}) {
      display: none;
   }
`

export const NavLink = styled(N)<ButtonType>`
   color: ${({ theme }) => theme.palette.neutral[8]};
   white-space: nowrap;
   ${({ theme }) => theme.customTypography.semibold[10]};
   text-align: center;
   padding: 0 .5rem;
   border-bottom: 3px solid ${({$isActive, theme}) => (!$isActive ? 'transparent' : theme.palette.positive[8])};
   color: ${({$isActive, theme}) => ($isActive ? theme.palette.positive[8]: "")};
  
`

export const RegisterButton = styled(ContainedButton).attrs(() => ({
   style:{
      borderRadius:'23px'
   },
}))<ButtonType>`
   color: ${({$isActive, theme}) => ($isActive ? 'white' : theme.palette.neutral[11])} !important;
   background-color: ${({$isActive, theme}) => ($isActive ? theme.palette.neutral[11] : "transparent")} !important;;
`

export const ButtonWrapper = styled.div`
    display: flex;
    column-gap: 1rem;
`

