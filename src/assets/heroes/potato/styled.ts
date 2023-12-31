import styled from "styled-components"
import message from "./message.png"



export const Container = styled.div`
  position: relative;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 3rem 2rem;
  }
`
export const Message = styled.div`
  position: relative;
  left: 50%;
  top: 10%;
  width: 235px;
  height: 210px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('${message}');
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.blue[9]};
  font-size: 28px;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    width: 100px;
    height: 90px;
    padding: .8rem;
    font-size: 14px;
  }
`

export const BgColor = styled.div`
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: #159DE9;
    filter: blur(70.35124206542969px);
    top: 20%;
   @media screen and (${({ theme }) => theme.breakpoints.sm}) {
     top: 20%;
     left: 0;
     right: 0;
  }  
`

export const Image = styled.img`
  position: relative;
  width: 100%;
  z-index: 1;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    top: 20%;
    left: 0;
    right: 0;
  }
`
export const LegoImage = styled.img`
  position: relative;
  width: 100%;
  z-index: 1;
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
   display: none;
  }
`





