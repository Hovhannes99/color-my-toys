import {
  TextField,
  inputBaseClasses,
  formLabelClasses,
  inputLabelClasses,
  outlinedInputClasses,
  formHelperTextClasses,
} from '@mui/material';
import styled, { css } from 'styled-components';

export const Input = styled(TextField).attrs(() => ({
  variant: 'outlined',
}))`
  height: 3rem;
  padding: 0;

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  .${formLabelClasses.root} {
    ${({ theme }) => theme.customTypography.medium[8]};
  }

  .${inputLabelClasses.root} {
    transform: translate(14px, 12px) scale(1);
  }
  .${inputLabelClasses.shrink} {
    transform: translate(0px, -18px) scale(0.9);
  }
  .${formHelperTextClasses.root} {
    position: absolute;
    width: 100%;
    top: 100%;
    left: -1.4rem;
    font-size: 1rem;
  }

  .${inputBaseClasses.root} {
    padding: 0 1.6rem;
    height: 100%;

    .${inputBaseClasses.input} {
      ${() =>
        css`
          ${({ theme }) => theme.customTypography.medium[8]}
        `}
      padding: 0;
      height: 100%;
    }
  }

  .${outlinedInputClasses.notchedOutline} {
    legend {
      width: 0;
    }
  }
`;

export const InputWrapper = styled.div`
   display: flex;
   flex-flow: column;
`
export const  InputLabel = styled.p`
  font-size: 15px;
  padding-bottom: 10px;
  font-weight: 600;
  color:${({ theme }) => theme.palette.neutral[6]};

`
