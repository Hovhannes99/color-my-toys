import styled from 'styled-components'
import {MainContainer} from "@/kit/container/styled.ts";




export const Container = styled(MainContainer)`
   display: flex;
   background-color: ${({ theme }) => theme.palette.blue[8]};
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    flex-flow: column;
  }
`

export const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 42px;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
     font-size: 30px;
  }
`
export const SubTitle = styled.p`
  color: ${({ theme }) => theme.palette.blue[3]};
  font-weight: 500;
  font-size: 26px;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
     padding-top: 2rem;
     padding-right: 4rem;
  }
`

export const MobileWrapper = styled.div`
  display: none;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    display: block;
    > img {
       position: relative;
       left: 50%;
    }
  }
`
export const DesktopWrapper = styled.div`
  padding-top: 3rem;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`
export const Text = styled.p`
  color: white;
  font-weight: 500;
  padding-bottom: 1rem;
  padding-right: 10rem;
  > span {
    color: ${({ theme }) => theme.palette.blue[11]};
  }
  > a {
    color: white;
    text-decoration: underline;
  }
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    padding-right:0
  }
`

export const LeftPart = styled.div`
  width: 50%;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`
export const RightPart = styled.div`
  width: 50%;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`