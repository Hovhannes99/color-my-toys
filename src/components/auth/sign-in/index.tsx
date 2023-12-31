import {
    ButtonWrapper,
    Container,
    FieldWrapper,
    ForgotLabel,
    ForgotPassWrapper,
    GoogleWrapper,
    IconGoogle,
    Label, Subtitle, Wrapper
} from "./styled.ts";
import {Input, InputLabel, InputWrapper} from "@/kit/inputs/input.tsx";
import {Checkbox} from "@/kit/checkbox";
import {useState} from "react";
import {PrimaryButton} from "@/kit/buttons/styled.ts";
import {Divider} from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {useNavigate} from "react-router-dom";


const SignIn = () => {
    const [isRemember, setIsRemember] = useState(false);
    const navigate = useNavigate()

    return (
        <Container>
            <Label>Sign In</Label>
            <Subtitle>Login in to your account</Subtitle>
            <FieldWrapper>
                <InputWrapper>
                    <InputLabel>Email:</InputLabel>
                    <Input/>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Password:</InputLabel>
                    <Input type={'password'}/>
                </InputWrapper>
                <ForgotPassWrapper>
                    <Checkbox $isChecked={isRemember} onChange={setIsRemember} label={"Remember Me"}/>
                    <ForgotLabel onClick={()=>navigate("/auth/forgot", { replace: true })}>Forgot Password?</ForgotLabel>
                </ForgotPassWrapper>
                <ButtonWrapper>
                    <PrimaryButton>
                        Sign in
                    </PrimaryButton>
                </ButtonWrapper>
                <Divider/>
                <GoogleWrapper>
                    <Wrapper>
                      <IconGoogle/>
                      <InputLabel>Sign In with Google</InputLabel>
                    </Wrapper>
                    <Wrapper onClick={()=>navigate("/auth/sign-up", { replace: true })}>
                        <PersonAddIcon sx={{color:"#858585", cursor:'pointer'}}/>
                        <InputLabel>Sign Up</InputLabel>
                    </Wrapper>
                </GoogleWrapper>
            </FieldWrapper>
        </Container>
    )

}

export default SignIn