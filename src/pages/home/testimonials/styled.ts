import styled from "styled-components";
import {Title as T} from "@/pages/home/works/styled.ts";



export const Container = styled.div``

export const Title = styled(T)`
  padding: 5rem 10rem 0;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem 1rem 0;
  }
`
