import styled from "styled-components";


export const Container = styled.div`
   width: 100%;
   padding: 2.3rem 10rem;
   background-color: ${({ theme }) => theme.palette.neutral[2]};
   position: relative;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem 1rem .8rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const NavWrapper = styled.div`
   display: flex;
   align-items: center;
     @media screen and (${({ theme }) => theme.breakpoints.sm}) {
       display: flex;
       align-items: center;
       flex-direction: column;
     }
  
`