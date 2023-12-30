import styled from 'styled-components'
import img from '../../assets/login-bg.jpeg'


export const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-top: 2rem;
   margin-bottom: 2rem;
   background: #FFF;
   box-shadow: 30px 0 60px 0 rgba(102, 124, 150, 0.13), -30px 0 60px 0 rgba(102, 124, 150, 0.13);
   @media screen and (${({ theme }) => theme.breakpoints.sm}) {
      box-shadow: none;
      margin: 0;
   }

`

export const LogoContainer = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-image: url(${img});
    background-size: 100% 100%;
    padding: 1rem 3rem;
   @media screen and (${({ theme }) => theme.breakpoints.sm}) {
      display: none;
   }
`

export const FieldContainer = styled.div`
   width: 50%;
   padding: 4rem 5rem 2rem 4rem;
   @media screen and (${({ theme }) => theme.breakpoints.sm}) {
      width: 100%;
      padding: 2rem 1rem;
   }
`

export const LogoWrapper = styled.div`
  padding: 10rem 0;
`

export const Label = styled.p`
   color: white;
   ${({ theme }) => theme.customTypography.semibold[18]};
   font-weight: 600;
   text-align: center;
   text-space: 2;
`

export const SubLabel = styled(Label)`
  font-size: 17px;
  padding-top: 2rem;
  padding-bottom: 10rem;
`

