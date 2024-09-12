import React from 'react';
import {
   
   
    createBrowserRouter,
    createHashRouter,
    RouterProvider,
    
} from 'react-router-dom';

import Home from '../Home/Home';
import About from './about/About';
import Blog from './blog/Blog';
import Portfolio from './portfolio/Portfolio';
import Services from './services/Services';
import Contacts from './contacts/Contacts';
import Test from './test/Test';
import Layout from '../Layout';

const Pages = () => {

    let routers = createHashRouter([
        {path:"",element:<Layout/>,children:[
            {index:true , element:<Home/>},
            { path:'/about' ,element:<About/>},
            { path:'/services' ,element:<Services/>},
            { path:'/portfolio' ,element:<Portfolio/>},
            { path:'/testimonials' ,element:<Test/>},
            { path:'/blog' ,element:<Blog/>},
            { path:'/contact' ,element:<Contacts/>},
        ]}
    ])
    return (

        <RouterProvider router={routers}></RouterProvider>

        // <Router>
        //     <Header />
        //     <Routes>
        //         <Route path='/' element={<Home/>}></Route>
        //         <Route path='/about' element={<About/>}></Route>
        //         <Route path='/services' element={<Services/>}></Route>
        //         <Route path='/portfolio' element={<Portfolio/>}></Route>
        //         <Route path='/testimonials' element={<Test/>}></Route>

        //         <Route path='/blog' element={<Blog/>}></Route>
        //         <Route path='/contact' element={<Contacts/>}></Route>

        //     </Routes>
        //     <Footer/>
           

        // </Router>


    )
}



export default Pages;