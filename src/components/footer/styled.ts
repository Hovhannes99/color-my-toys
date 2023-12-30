import styled from 'styled-components'
import {Divider} from "@mui/material";



export const  Container =  styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  row-gap: 2rem;
  align-content: center;
  justify-content: center;
  padding: 2.3rem 5rem;
  background-color: ${({ theme }) => theme.palette.neutral[2]};
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    row-gap: 1rem;
    padding: 1rem .5rem;
  }
`

export const LogoWrapper = styled.div`
   display: flex;
   justify-content: center;
`

export const TextWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   column-gap: 1rem;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
     display: flex;
     flex-flow: column;
  }
`

export const Subtitles = styled.p`
  color: ${({ theme }) => theme.palette.neutral[8]};
  font-weight: bold;
`

export const Line = styled(Divider)`
   background-color: #333333;
   height: 2px;
`