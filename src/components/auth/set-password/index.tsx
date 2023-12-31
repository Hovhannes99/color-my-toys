import {
    ButtonWrapper,
    Container,
    FieldWrapper,
    Label, Subtitle,
} from "../sign-in/styled.ts";
import {Input, InputLabel, InputWrapper} from "@/kit/inputs/input.tsx";
import {PrimaryButton} from "@/kit/buttons/styled.ts";


const SetPassword = () => {

    return (
        <Container>
            <Label>Reset Password</Label>
            <Subtitle>Please choose your new password</Subtitle>
            <FieldWrapper>
                <InputWrapper>
                    <InputLabel>New Password:</InputLabel>
                    <Input  type={'password'}/>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Confirm Password:</InputLabel>
                    <Input type={'password'}/>
                </InputWrapper>
                <ButtonWrapper>
                    <PrimaryButton>
                        Continue
                    </PrimaryButton>
                </ButtonWrapper>
            </FieldWrapper>

        </Container>
    )

}

export default SetPassword