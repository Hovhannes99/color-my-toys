import {
    ButtonWrapper,
    Container,
    FieldWrapper,
    GoogleWrapper,
    IconGoogle,
    Label, Subtitle, Wrapper
} from "../sign-in/styled.ts";
import {Input, InputLabel, InputWrapper} from "@/kit/inputs/input.tsx";
import {PrimaryButton} from "@/kit/buttons/styled.ts";
import {Divider} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";


const SignUp = () => {
   const navigate = useNavigate();
    return (
        <Container>
            <Label>Sign Up</Label>
            <Subtitle>Enter your email address to create your account on Color My Toys</Subtitle>
            <FieldWrapper>
                <InputWrapper>
                    <InputLabel>Username:</InputLabel>
                    <Input/>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Email:</InputLabel>
                    <Input/>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Password:</InputLabel>
                    <Input type={'password'}/>
                </InputWrapper>
                <ButtonWrapper>
                    <PrimaryButton>
                        Create Account
                    </PrimaryButton>
                </ButtonWrapper>
                <Divider/>
                <GoogleWrapper>
                    <Wrapper>
                        <IconGoogle/>
                        <InputLabel>Sign Up with Google</InputLabel>
                    </Wrapper>
                    <Wrapper onClick={()=>navigate("/auth/sign-in", { replace: true })}>
                      <LogoutIcon sx={{color:"#858585", cursor:'pointer'}}/>
                      <InputLabel>Log in</InputLabel>
                    </Wrapper>
                </GoogleWrapper>
            </FieldWrapper>
        </Container>
    )

}

export default SignUp