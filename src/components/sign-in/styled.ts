import styled from "styled-components"



export const Container = styled.div``

export const Label = styled.p`
  text-align: center;
  ${({ theme }) => theme.customTypography.semibold[16]}
`