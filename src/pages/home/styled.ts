import styled from "styled-components";
import {PrimaryButton} from "@/kit/buttons/styled.ts";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 3rem;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    flex-flow: column;
    padding-top: 2rem;
  }
`

export const Title = styled.div`
  font-size: 45px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 0.01em;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    font-size: 30px;
    font-weight: 600;
    line-height: 45px;
    letter-spacing: 0;
    text-align: left;
    padding-bottom: 3rem;
  }
;
`
export const RightWrapper = styled.div`
    width: 100%;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`
export const LeftWrapper = styled.div`
    width: 100%;
    padding: 5rem 0 0 10rem ;
    @media screen and (${({ theme }) => theme.breakpoints.md}) {
      padding: 2rem 0 0 4rem ;
    }
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
     padding: 0 2rem;
  }
`
export const UploadButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.palette.blue[9]} !important;
  border-radius: 32px !important;
  padding: 1rem 2rem !important;
  margin-top: 9rem !important;
  @media screen and (${({ theme }) => theme.breakpoints.md}) {
    margin-top: 2rem !important;
    margin-bottom: .5rem !important;
  }
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    display: none !important;
  }
`

export const UploadButtonMobile = styled(PrimaryButton)`
  background: ${({ theme }) => theme.palette.blue[9]} !important;
  border-radius: 32px !important;
  padding: 1rem 2rem !important;
  margin-top: 1rem !important;
  margin-bottom: 3rem !important;
  display: none !important;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    display: inline-block !important;
  }
`