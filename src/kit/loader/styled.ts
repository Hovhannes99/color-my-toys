import styled from 'styled-components';
import loader from '@/assets/loader.svg';

type ContainerProps = {
  $small?: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  height: ${(props) => (props.$small ? '100%' : '100vh')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoaderIcon = styled.img.attrs(() => ({
  src: loader,
}))``
