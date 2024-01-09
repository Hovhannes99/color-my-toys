import styled from "styled-components"
import {PrimaryButton} from "@/kit/buttons/styled.ts";
import {MainContainer} from "@/kit/container/styled.ts";



export const Container = styled(MainContainer)`
`

export const Title = styled.p`
  font-size: 50px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 0;
  text-align: start;
  padding-bottom: 5rem;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    font-size: 21px;
    padding-bottom: 3rem;
    line-height: 25px;
  }

`

export const GridContainer = styled.div`
  display: grid;
  column-gap: 34px;
  row-gap:34px;
  grid-template-columns: auto auto;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    column-gap: 10px;
    row-gap:10px;
  }
`

export const GridItem = styled.div`
  border: 1px solid #000000;
  > img {
     width: 100%;
     height: 100%;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 6rem 0;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    padding: 3rem 0;
  }
`

export const Button = styled(PrimaryButton)`
  background: ${({ theme }) => theme.palette.blue[9]} !important;
  border-radius: 32px !important;
  padding: 1rem 2rem !important;
`