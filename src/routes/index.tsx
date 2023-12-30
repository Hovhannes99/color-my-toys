import {Route, Routes as RouterRoutes} from 'react-router-dom';
import {lazy, Suspense} from "react";
import {Loader} from "@/kit/loader";
import SignIn from "@/components/sign-in";

const Registration = lazy(() => import('@/pages/registration/index.tsx'));


const Routes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <RouterRoutes>
                <Route path='/' element={<div>Home</div>}/>
                <Route path='/about' element={<div>About Us</div>}/>
                <Route path='/contact' element={<div>Contact</div>}/>
                <Route path='/auth' element={<Registration/>}>
                    <Route path='sign-in' element={<SignIn/>}/>
                    <Route path='sign-up' element={<div>sign up</div>}/>
                </Route>
            </RouterRoutes>
        </Suspense>
    )
}


export default Routes