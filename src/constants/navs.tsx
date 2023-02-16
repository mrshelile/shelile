import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Resume from "../pages/Resume/Resume";
import Services from "../pages/Services/Services";

export let navs =[
    {   
        path:"/",
        name: "Home",
        component:Home,
    },
    {
        path:"/resume",
        name: "Resume",
        component:Resume,
    },
    {
        path:"/portfolio",
        name: "Portfolio",
        component:Portfolio,
    },
    {
        path:"/services",
        name: "Services",
        component:Services,
    },
    {   path:"/about",
        name: "About",
        component:About,
    },
    // {
    //     path:"#",
    //     name: 'Contact',
    //     component:Contact
    // }
]