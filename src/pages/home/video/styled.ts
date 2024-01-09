import styled from "styled-components";
import {MainContainer} from "@/kit/container/styled.ts";




export const Container = styled(MainContainer)`
   background-color: ${({ theme }) => theme.palette.blue[10]} ;
  .video{
      width: 100%;
      height: 100%;
      box-shadow: -20px 0px 60px 0px rgba(7, 8, 11, 0.46);
  }
`