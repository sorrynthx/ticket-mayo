import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTicket, faHome, faCircleUser, faKeyboard} from '@fortawesome/free-solid-svg-icons';
import {Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const tabs = [
    {
        route: "/",
        icon: faHome,
        label: ""
    }, 
    {
        route: "/tickets",
        icon: faTicket,
        label: ""
    },
    {
        route: "/community",
        icon: faKeyboard,
        label: ""
    },
    {
        route: "/myCargo",
        icon: faCircleUser,
        label: ""
    }
];

const BottomNavDiv = styled.div `
  background-color: #fff;
  
`;

interface Ipath {
    path: string,
}

function BottomNav({path}:Ipath) {
    
    return (
        
        <BottomNavDiv
            className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav"
            role="navigation">
            <Nav className="w-100">
                <div className=" d-flex flex-row justify-content-around w-100">
                    {/* {
                        tabs.map((tab, index) => (
                            <NavItem key={`tab-${index}`}>
                                
                                <NavLink to={tab.route} className="nav-link" 
                                    style={({isActive}) => (isActive ? {color: '#FF8FAB', background: '#f0f0f0'} : {color: '#000000'})}> 
                                    
                                    <div className="row justify-content-center align-items-center">
                                        <FontAwesomeIcon size="lg" icon={tab.icon}/>
                                        <div className='text-center'>{tab.label}</div>
                                    </div>
                                </NavLink>

                            </NavItem>
                        ))
                    } */}

                    <NavLink to="/" className="nav-link" 
                        style={({isActive}) => (isActive ? {color: '#FF8FAB', background: '#f0f0f0'} : path === '/home/Detail' ? {color: '#FF8FAB', background: '#f0f0f0'} : {color: '#000000'})}> 
                                    
                        <div className="row justify-content-center align-items-center">
                            <FontAwesomeIcon size="lg" icon={faHome}/>
                            <div className='text-center'></div>
                        </div>
                    </NavLink>
                    
                    
                    <NavLink to="/tickets" className="nav-link" 
                        style={({isActive}) => (isActive ? {color: '#FF8FAB', background: '#f0f0f0'} : {color: '#000000'})}> 
                                    
                        <div className="row justify-content-center align-items-center">
                            <FontAwesomeIcon size="lg" icon={faTicket}/>
                            <div className='text-center'></div>
                        </div>
                    </NavLink>

                    
                    <NavLink to="/community" className="nav-link" 
                        style={({isActive}) => (isActive ? {color: '#FF8FAB', background: '#f0f0f0'} : {color: '#000000'})}> 
                                    
                        <div className="row justify-content-center align-items-center">
                            <FontAwesomeIcon size="lg" icon={faKeyboard}/>
                            <div className='text-center'></div>
                        </div>
                    </NavLink>

                    
                    <NavLink to="/myCargo" className="nav-link" 
                        style={({isActive}) => (isActive ? {color: '#FF8FAB', background: '#f0f0f0'} : {color: '#000000'})}> 
                                    
                        <div className="row justify-content-center align-items-center">
                            <FontAwesomeIcon size="lg" icon={faCircleUser}/>
                            <div className='text-center'></div>
                        </div>
                    </NavLink>

                </div>
            </Nav>
        </BottomNavDiv>

    );
}

export default BottomNav;