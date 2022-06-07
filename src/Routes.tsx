import {Routes as WrapperRoutes, Route, BrowserRouter} from 'react-router-dom';

import User from './pages/User';

function Routes(): JSX.Element {
    return (
        <BrowserRouter>
        <WrapperRoutes>
            <Route path='/' element={<User />}></Route>
        </WrapperRoutes>
        </BrowserRouter>
    )
}

export default Routes;