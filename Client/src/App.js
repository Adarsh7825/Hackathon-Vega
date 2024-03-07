import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component

/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import PlacementCalendar from './components/PlacementCalendar.';
import PreparationMaterial from './components/PreparationMaterials';
import CompanyPortal from './components/CompanyPortal';
import dashboard from './components/dashboard';
import FrameHeader from './pages/FrameHeader';

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth';
import QueryForum from './components/QueryForum';
import ProductPage from './pages/ProductPage';
import Chat from './pages/Chat';
import Forum from './pages/Forum';

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Username />
    },
    {
        path : '/register',
        element : <Register />
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery />
    },
    {
        path : '/pm',
        element : <PreparationMaterial />
    },
    {
        path : '/query',
        element : <Forum></Forum>
    },
    {
        path : '/dashboard',
        element : <ProductPage></ProductPage>
    },
    {
        path : '/test',
        element : <FrameHeader/>
    },
    {
        path : '/cp',
        element : <CompanyPortal />
    },
    {
        path : '/reset',
        element : <Reset />
    },
    {
        path : '/calender',
        element : <AuthorizeUser><PlacementCalendar /></AuthorizeUser>
    },
    {
        path : '*',
        element : <PageNotFound />
    },
]);

export default function App() {
  return (
    <main>
        <Navbar /> {/* This places the Navbar above the RouterProvider, making it visible across all routes */}
        <RouterProvider router={router} />
        <Chat/>
    </main>
  );
}