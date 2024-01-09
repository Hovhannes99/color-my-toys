import styled from "styled-components";
import {ScreenSizes} from "@/constants.ts";


export const Container = styled.div`
  padding: 139px 0 208px 0;
  @media screen and ${ScreenSizes.laptop} {
    padding: 105px 0 134px 0;
  }
  @media screen and ${ScreenSizes.mobile} {
    padding: 60px 0 80px 0;
  }
`
export const FeedbackContainer = styled.div`
    width: 100%;
    height: 80%;
    position: relative;
    border-radius: 10px;
    padding: 2rem 0.5rem;
`

export const RatingWrapper = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`
export const FeedbackWrapper = styled.div`
    height: 100%;
    border-radius: 10px;
    max-width: 353px;
    min-height: 500px;
    
`

export const Description = styled.p`
  width: 100%;
  padding-right: 10px;
  text-align: center;
  color: white;
  max-height: 220px;
  min-height: 200px;
  overflow-y: auto;
  overflow-wrap: break-word;
  max-width: 290px;
  margin: 0 auto;

  &::-webkit-scrollbar {
    height: .2rem;
    width: .2rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 223, 138, 0.6);
    border: transparent;
    border-radius: 0.5rem;
  }
`
export const ClientWrapper = styled.div`
   width: 100%;
   display: grid;
   justify-items: center;
   position: absolute;
   left: 0;
   bottom: -35%;
   & > img {
     margin-bottom: 16px;
     border-radius: 50px;
   }
`
export const Text = styled.p`
   margin: 0 auto;
  
`