import styled from "styled-components";


export const Container = styled.div`
   width: 100%;
   padding: 2.3rem 10rem;
   background-color: ${({ theme }) => theme.palette.neutral[2]};
`
export const Logo = styled.img`
    cursor: pointer;
`

export const NavWrapper = styled.div`
   display: flex;
   align-items: center;
`