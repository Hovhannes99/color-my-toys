import { Route, Routes as RouterRoutes } from 'react-router-dom';
import {lazy} from "react";
const Registration = lazy(() => import('@/pages/registration/index.tsx'));






const Routes = () => {
    return (
        <RouterRoutes>
                <Route path='/' element={<div>Home</div>} />
                <Route path='/about' element={<div>About Us</div>} />
                <Route path='/contact' element={<div>Contact</div>} />
                <Route path='/auth' element={<Registration />}>
                    <Route path='sign-in' element={<div>sign in</div>} />
                    <Route path='sign-up' element={<div>sign up</div>} />
                </Route>
        </RouterRoutes>
    )
}


export default Routes