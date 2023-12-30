import {
    ButtonWrapper,
    Container,
    FieldWrapper,
    ForgotLabel,
    ForgotPassWrapper,
    GoogleWrapper,
    IconGoogle,
    Label
} from "./styled.ts";
import {Input, InputLabel, InputWrapper} from "@/kit/input/input.tsx";
import {Checkbox} from "@/kit/checkbox";
import {useState} from "react";
import {PrimaryButton} from "@/kit/buttons/styled.ts";
import {Divider} from "@mui/material";


const SignIn = () => {
    const [isRemember, setIsRemember] = useState(false);


    return (
        <Container>
            <Label>Sign In</Label>
            <FieldWrapper>
                <InputWrapper>
                    <InputLabel>Email:</InputLabel>
                    <Input/>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Password:</InputLabel>
                    <Input/>
                </InputWrapper>
                <ForgotPassWrapper>
                    <Checkbox $isChecked={isRemember} onChange={setIsRemember} label={"Remember Me"}/>
                    <ForgotLabel>Forgot Password</ForgotLabel>
                </ForgotPassWrapper>
                <ButtonWrapper>
                    <PrimaryButton>
                        Sign in
                    </PrimaryButton>
                </ButtonWrapper>
                <Divider/>
                <GoogleWrapper>
                    <IconGoogle/>
                    <InputLabel>Sign Up with Google</InputLabel>
                </GoogleWrapper>
            </FieldWrapper>

        </Container>
    )

}

export default SignIn