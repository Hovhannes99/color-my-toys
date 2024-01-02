import styled from "styled-components";




export const Container = styled.div`
   padding: 5rem 15rem;
   background-color: ${({ theme }) => theme.palette.blue[10]} ;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem 1rem;
  }
  .video{
      width: 100%;
      height: 100%;
      box-shadow: -20px 0px 60px 0px rgba(7, 8, 11, 0.46);
  }
`