import styled from "styled-components";



export const Container = styled.div`
    position: absolute;
    right: 10%;
  @media screen and (${({ theme }) => theme.breakpoints.smMin}) {
    display: none;
    
  }
`