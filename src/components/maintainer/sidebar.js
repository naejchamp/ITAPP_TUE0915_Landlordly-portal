import React from "react";
import { Link } from "react-router-dom";


const Sidebar = ()=>{
    return(
                <>
        {/* Sidebar Start */}
        <aside className="left-sidebar">
            {/* Sidebar scroll*/}
            <div>
            <div className="brand-logo d-flex align-items-center justify-content-between">
                <a href="./index.html" className="text-nowrap logo-img">
                <img src={require('../../assets/images/logos/favicon.png')} height={80} alt="" />
                </a>
                <div
                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                id="sidebarCollapse"
                >
                <i className="ti ti-x fs-8" />
                </div>
            </div>
            {/* Sidebar navigation*/}
            <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                <ul id="sidebarnav">
                <li className="sidebar-item">
                    <Link
                    className="sidebar-link"
                    to={'/maintainer/tickets'}
                    aria-expanded="false"
                    >
                    <span>
                        <i className="ti ti-ticket" />
                    </span>
                    <span className="hide-menu">Tickets</span>
                    </Link>
                </li>
               
              
              
               
              
            
               
    
                </ul>
              
            </nav>
            {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
        </aside>
        {/*  Sidebar End */}
        </>

    )
}

export default Sidebar;