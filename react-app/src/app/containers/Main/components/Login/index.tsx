import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { Toast } from "primereact/toast"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import styled from "styled-components"
import { asyncActions } from "../../../../store/asyncActions"
import { selectServerErrorMessage, selectToken } from "../../../../store/selectors"
import { actions } from "../../../../store/slice"

interface Props {
    onLoginFinished: () => void
}

export const Login = ({ onLoginFinished }: Props) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');
    const [isLoginSend, setIsLoginSend] = useState<boolean>(false);

    const token = useSelector(selectToken);
    const serverErrorMessage = useSelector(selectServerErrorMessage);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const toast = useRef<any>(null)

    useEffect(() => {
        if (isLoginSend) {
            onLoginFinished();
        }
    }, [token]);

    useEffect(() => {      
        if (serverErrorMessage) {
            toast.current.show({ severity: 'error', summery: 'Error Msg', detail: serverErrorMessage, life: 3000 })
            dispatch(actions.clearServerErrorMessage());
            setIsLoginSend(false);
        }
    }, [serverErrorMessage])

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoginSend(true);
        dispatch(asyncActions.login({ email, password }));
        // dispatch(asyncActions.login({ userName:email, password }));
    }

    const isHebrewLetters = (value) => {
        return /^[\u0590-\u05fe]+$/.test(value)
    }
    const validateEmail = (mail) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    }

    const isEmailValid = () => {
        return validateEmail(email) && !isHebrewLetters(email)
    }

    const isPasswordValid = () => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6}$/.test(password) && !isHebrewLetters(password);
    }

    const handleEmailBlur = (e) => {
        if (!isEmailValid()) {
            setEmailErrorMessage('not valid email')
        } else {
            setEmailErrorMessage('')
        }
    }

    const handlePasswordBlur = (e) => {
        if (!isPasswordValid()) {
            setPasswordErrorMessage('not valid password')
        } else {
            setPasswordErrorMessage('')
        }
    }

    const renderErrorMessage = (message) => {
        return <ErrorLabel className="error">{message}</ErrorLabel>
    }

    return (
        <Wrapper>
            <Toast ref={toast} />
            <form onSubmit={handleSubmit}>
                <ElenetWrapper>
                    <span className='p-float-label'>
                            <InputText
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={handleEmailBlur}
                                required
                                style={{ width: '100%' }}
                            />
                            <label htmlFor="email">email</label>
                    </span>
                </ElenetWrapper>
                {renderErrorMessage(emailErrorMessage)}
                <ElenetWrapper>
                <span className='p-float-label'>
                    <InputText
                        name="password"
                        id="password"
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={handlePasswordBlur}
                        required
                        style={{ width: '100%' }}
                    />
                    <label htmlFor="password">password</label>
                    </span>
                </ElenetWrapper>
                {renderErrorMessage(passwordErrorMessage)}
                <ElenetWrapper>
                    <Button
                        type='submit'
                        label="Login"
                        disabled={!isEmailValid() || !isPasswordValid()}
                        loading={isLoginSend}
                        loadingIcon={'pi pi-spin pi pi-spinner'}
                        style={{ width: '100%' }} />
                </ElenetWrapper>
            </form>
        </Wrapper>
    )
}



const Wrapper = styled.div`
  text-align: center;
  margin: 150px auto;
  width: 25%;
  border: 1px solid #6366F1;
  border-radius: 5px;
  padding: 40px;
`

const ElenetWrapper = styled.div`
  padding: 10px;
  width: 100%;
`

const ErrorLabel = styled.div`
  color: red;
`
