import styled from "styled-components";


export const Container = styled.div`
   display: flex;
   flex-flow: column;
   justify-content: space-between;
   height: 100%;
`

export const ChildrenContainer = styled.div`
   padding: 0 11rem;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
       padding: 0;
  }
`