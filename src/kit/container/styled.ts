import styled from "styled-components";


export const MainContainer = styled.div`
  padding: 5rem 15rem;
  @media screen and (${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 6rem;
  }
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem 1rem;
  }
`