import styled from "styled-components";
import {Button} from "@mui/material";

export const DefaultButton = styled(Button)`
  ${({ theme }) => theme.customTypography.semibold[12]};
  height: 3.6rem;
  white-space: nowrap;
  min-width: 0;
  text-transform: capitalize !important;
`;

export const OutlinedButton = styled(Button).attrs(() => ({
    variant: 'outlined',
}))`
  ${({ theme }) => theme.customTypography.semibold[12]};
  height: 3.6rem;
  white-space: nowrap;
  min-width: 0;
  text-transform: capitalize !important;
`;
export const ContainedButton = styled(Button).attrs(() => ({
    variant: 'contained',
}))`
  ${({ theme }) => theme.customTypography.semibold[20]};
  white-space: nowrap;
  min-width: 0;
  text-transform: capitalize !important;
`;

export const PrimaryButton = styled(ContainedButton)`
   background-color: ${({ theme }) => theme.palette.blue[7]} !important;
   padding: .5rem 3rem !important;
   font-weight: 600 !important;
`