import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

type SquareProps = {
  $isChecked: boolean;
};

export const Square = styled.div<SquareProps>`
  width: 1.5rem;
  height: 1.5rem;
  box-sizing: border-box;
  border-radius: 0.4rem;
  border: 0.1rem solid
    ${({ theme, $isChecked }) =>
      $isChecked ? theme.palette.primary.main : theme.palette.common.black};
  transition-property: all;
  transition-duration: 300ms;
  position: relative;
  &:hover {
    cursor: pointer;
  }

  &::after {
    display: ${({ $isChecked }) => ($isChecked ? 'block' : 'none')};
    position: absolute;
    content: '';
    width: 0.5rem;
    height: 1rem;
    border-right: 0.1rem solid ${({ theme }) => theme.palette.primary.main};
    border-bottom: 0.1rem solid ${({ theme }) => theme.palette.primary.main};
    transform: rotate(45deg);
    top: 0;
    left: 0.4rem;
  }
`;

export const Label = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.neutral[6]};
  font-weight: 600;
`;
