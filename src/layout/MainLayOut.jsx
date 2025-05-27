import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const MainLayOut = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-6xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayOut;