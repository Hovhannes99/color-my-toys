import styled from "styled-components"
import  googleImg from "@/assets/google.svg";


export const Container = styled.form``

export const IconGoogle = styled.img.attrs(() => ({
  src: googleImg,
  width: 19,
  height:19
}))``
export const Label = styled.p`
  text-align: center;
  ${({ theme }) => theme.customTypography.semibold[16]}
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    ${({ theme }) => theme.customTypography.semibold[12]}
  }
`
export const ForgotLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.blue[7]};
  cursor: pointer;
`

export const FieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  row-gap: 1rem;
  padding-top: 3rem;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 1rem;
  }
`

export const ForgotPassWrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 2rem;
`
export const GoogleWrapper = styled.div`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 3rem;
  justify-content: space-between;
  > p {
    color:${({ theme }) => theme.palette.neutral[5]}
  }
`

export const Subtitle = styled.p`
  text-align: center;
  ${({ theme }) => theme.customTypography.medium[14]};
  padding-top: 1.5rem;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    ${({ theme }) => theme.customTypography.semibold[10]};
    padding-top: 1rem ;
  }
`

export const Wrapper = styled.div`
   display: flex;
`

export const ButtonWrapper = styled.div`
   margin-top: 2rem;
   margin-bottom: 2rem;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`