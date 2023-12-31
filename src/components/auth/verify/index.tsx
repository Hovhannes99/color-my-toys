
import {
    ButtonWrapper,
    Container,
    FieldWrapper,
    Label, Subtitle,
} from "../sign-in/styled.ts";
import {InputWrapper, VerifyInput} from "@/kit/inputs/input.tsx";
import {PrimaryButton} from "@/kit/buttons/styled.ts";
import {useState} from "react";


const VerifyCode = () => {
    const [code, setCode] = useState<string>()

    return (
        <Container>
            <Label>Reset Password</Label>
            <Subtitle>Please choose your new password</Subtitle>
            <FieldWrapper>
                <InputWrapper>
                    <VerifyInput
                       value={code}
                       onChange={(e:string)=>setCode(e)}
                       isInputNum
                       inputStyle={{
                           width: '100%',
                           margin: '8px',
                           padding: '13px 0',
                           border: "green",
                           backgroundColor: '#6CDCFC',
                           borderRadius: 8,
                           fontSize: "17px",
                           ':hover': {
                               borderColor: 'none'
                           },
                           color:"white"
                       }}
                       focusStyle={{
                           outline: 'none',
                           border: `2px solid #22B1DB`
                       }}
                      numInputs={6}
                    />
                </InputWrapper>
                <ButtonWrapper>
                    <PrimaryButton>
                        Confirm
                    </PrimaryButton>
                </ButtonWrapper>
            </FieldWrapper>

        </Container>
    )

}

export default VerifyCode