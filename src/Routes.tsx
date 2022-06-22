import {Routes as WrapperRoutes, Route, BrowserRouter} from 'react-router-dom';

import User from './pages/Users';
import Entregas from './pages/Entregas';
import Fornecedores from './pages/Fornecedores';

function Routes(): JSX.Element {
    return (
        <BrowserRouter>
        <WrapperRoutes>
            <Route path='/' element={<User />}></Route>
            <Route path='/entregas' element={<Entregas />}></Route>
            <Route path='/fornecedores' element={<Fornecedores />}></Route>
            {/* <Route path='/produtos' element={<Produtos />}></Route> */}
        </WrapperRoutes>
        </BrowserRouter>
    )
}

export default Routes;