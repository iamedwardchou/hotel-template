import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

const routes= [
    {
        path:'/',
        element: <HomePage/>,
        exact:true,
        breadcrumbName:'HomePage'
    },
    {
        path:'/about',
        element: <About/>,
        exact:true,
        breadcrumbName:'About'
    },
    {
        path:'/services',
        element: <Services/>,
        exact:true,
        breadcrumbName:'Services'
    },
    {
        path:'/contact',
        element: <Contact/>,
        exact:true,
        breadcrumbName:'Contact'
    }
];

export default routes;