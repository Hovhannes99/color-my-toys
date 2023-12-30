import styled from 'styled-components'
import {Box} from "@mui/material";


export const Container = styled(Box)`
  @media screen and (${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`