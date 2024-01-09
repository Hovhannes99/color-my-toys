import styled from "styled-components"



export const Container = styled.div`
   width: 100%;
   min-width: 500px;
  @media screen and (${({ theme }) => theme.breakpoints.md}) {
    width: 70%;
    min-width: 400px;
  }
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    width: 50%;
    min-width: 300px;
  }
`