import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
type ContainerProps = {
  $small?: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  height: ${(props) => (props.$small ? '100%' : '100vh')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 1rem;
`;

export const LoaderIcon = styled(CircularProgress)``
