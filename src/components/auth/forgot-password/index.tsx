import {
    ButtonWrapper,
    Container,
    FieldWrapper, GoogleWrapper,
    Label, Subtitle, Wrapper
} from "../sign-in/styled.ts";
import {Input, InputLabel, InputWrapper} from "@/kit/inputs/input.tsx";
import {PrimaryButton} from "@/kit/buttons/styled.ts";
import {Divider} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import {useNavigate} from "react-router-dom";



const ForgotPassword = () => {
  const navigate = useNavigate()
    return (
        <Container>
            <Label>Forgot Password?</Label>
            <Subtitle>Please enter your email address and we’ll send you the reset password code</Subtitle>
            <FieldWrapper>
                <InputWrapper>
                    <InputLabel>Email:</InputLabel>
                    <Input/>
                </InputWrapper>
                <ButtonWrapper>
                    <PrimaryButton>
                        Continue
                    </PrimaryButton>
                </ButtonWrapper>
                <Divider/>
                <GoogleWrapper>
                    <Wrapper/>
                    <Wrapper onClick={()=>navigate("/auth/sign-in", { replace: true })}>
                        <LogoutIcon sx={{color:"#858585", cursor:'pointer'}}/>
                        <InputLabel>Log in</InputLabel>
                    </Wrapper>
                </GoogleWrapper>
            </FieldWrapper>
        </Container>
    )

}

export default ForgotPassword