import {MenuItem as MItem} from "@mui/material";
import styled, {css} from "styled-components";


type ButtonType = {
    $isActive?:boolean
}



export const MenuItem = styled(MItem)<ButtonType>`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  ${({ $isActive }) => {
      console.log($isActive, '$isActive')
      if($isActive){
        return css`
          background: ${({theme}) => (theme.palette.positive[8])}  !important;
          color:  white !important;
        `;
      }
         return css`
          background: transparent !important;
          color: ${({theme}) => (theme.palette.neutral[7])} !important;
        `;
   
      
  }};
&:hover {
   color: ${({ theme }) => theme.palette.positive[8]}
}
`