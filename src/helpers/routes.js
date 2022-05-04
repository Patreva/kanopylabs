import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Item from '../pages/Item';

const AppRoutes = () => {
    const UserRoutes = [
        { path: '/:id', component: <Item /> }
    ]
    return (

            <Routes>
                <Route path='/' exact={true} element={<Home />} />
                {
                    UserRoutes.map(({ path, component }) => (
                        <Route key={path} path={path} exact={true} element={component} />
                    ))
                }
            </Routes>

    )
}

export default AppRoutes;