import {Route, Routes as RouterRoutes} from 'react-router-dom';
import {lazy, Suspense} from "react";
import {Loader} from "@/kit/loader";

const Registration = lazy(() => import('@/pages/registration/index.tsx'));
const SignUp = lazy(() => import('@/components/auth/sign-up'));
const SignIn = lazy(() => import('@/components/auth/sign-in'));
const ForgotPassword = lazy(() => import('@/components/auth/forgot-password'));
const SetPassword = lazy(() => import('@/components/auth/set-password'));
const VerifyCode = lazy(() => import('@/components/auth/verify'));
const About = lazy(() => import('@/pages/about'));


const Routes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <RouterRoutes>
                <Route path='/' element={<div>Home</div>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/auth' element={<Registration/>}>
                    <Route path='sign-in' element={<SignIn/>}/>
                    <Route path='sign-up' element={<SignUp/>}/>
                    <Route path='forgot' element={<ForgotPassword/>}/>
                    <Route path='set-password' element={<SetPassword/>}/>
                    <Route path='verify' element={<VerifyCode/>}/>
                </Route>
            </RouterRoutes>
        </Suspense>
    )
}


export default Routes