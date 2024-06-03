
import { LandlordAuthRequired, LandlordGuestRequired } from "../components/middlewares/landlord.js";
import { MaintainerAuthRequired, MaintainerGuestRequired } from "../components/middlewares/maintainer.js";
import Login from "../pages/auth/login";
import MaintainerLogin from "../pages/auth/maintainer_login/index.js";
import Profile from "../pages/auth/profile";
import Register from "../pages/auth/register";
import LandlordExpenses from "../pages/landlord/expenses";
import LandlordHome from "../pages/landlord/home";
import LandlordMaintainers from "../pages/landlord/maintainers";
import LandlordMaintainerTickets  from "../pages/landlord/maintainers/tickets"  ;
import LandlordTenants from "../pages/landlord/tenants";
import TenantProperties from "../pages/landlord/tenants/properties";
import About from "../pages/main/about";
import ContactUs from "../pages/main/contact_us";
import Landing from "../pages/main/landing";
import Properties from "../pages/main/properties.js";
import PropertyDetails from "../pages/main/property_details/index.js";
import MaintainerTickets from "../pages/maintainer/tickets";

const landlord_routes = [

    {id:1,path:"/",element:
    <LandlordAuthRequired>
    <LandlordHome />
    </LandlordAuthRequired>
    },
    {id:2,path:"/expenses",element:
    <LandlordAuthRequired>
    
    <LandlordExpenses />
    </LandlordAuthRequired>
    },
    {id:3,path:"/tenants",element:
    <LandlordAuthRequired>
    
    <LandlordTenants />
    </LandlordAuthRequired>},
    
    {id:4,path:"/tenants/properties",element:
    <LandlordAuthRequired>
    <TenantProperties />
    </LandlordAuthRequired>
    },
    {id:5,path:"/maintainers",element:
    <LandlordAuthRequired>
    
    <LandlordMaintainers />
    </LandlordAuthRequired>
    },
    {id:6,path:"/maintainers/tickets",element:
    <LandlordAuthRequired>
    
    <LandlordMaintainerTickets />
    </LandlordAuthRequired>
    },




    
]


const maintainer_routes = [
    {id:1,path:"/login",element: 
    <MaintainerGuestRequired>
        <MaintainerLogin />
    </MaintainerGuestRequired>
    },

    {id:2,path:"/tickets",element:
    <MaintainerAuthRequired>
        <MaintainerTickets />
    </MaintainerAuthRequired>
    },

]
const auth_routes = [
    {id:1,path:"/login",element:
    <LandlordGuestRequired>
    <Login />
    </LandlordGuestRequired>
    },
    {id:2,path:"/register",element:
    <LandlordGuestRequired>
    <Register />
    </LandlordGuestRequired>
    },
    {id:3,path:"/profile",element:
    <LandlordAuthRequired>
    <Profile />
    </LandlordAuthRequired>
    
    },



]

const main_routes = [
    {id:1,path:'',element:<Landing />},
    {id:2,path:'/about',element:<About />},
    {id:3,path:'/contact_us',element:<ContactUs />},
    {id:3,path:'/properties',element:<Properties />},
    
    {id:4,path:'/properties/:id',element:<PropertyDetails />}


]


export  {landlord_routes,main_routes,auth_routes,maintainer_routes}