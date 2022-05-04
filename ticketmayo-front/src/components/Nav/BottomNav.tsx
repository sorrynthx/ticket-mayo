import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTicket, faHome, faTicketSimple, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const tabs = [
    {
        route: "/",
        icon: faHome,
        label: ""
    }, {
        route: "/yes24",
        icon: faTicket,
        label: ""
    }, {
        route: "/Interpark",
        icon: faTicketSimple,
        label: ""
    }, {
        route: "/myCargo",
        icon: faCircleUser,
        label: ""
    }
];

const BottomNavDiv = styled.div `
  background-color: #FB6F92;
  
`;

const BottomNavText = styled.div `
  color: #fff;
`

function BottomNav() {
    return (

        <BottomNavDiv
            className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav"
            role="navigation">
            <Nav className="w-100">
                <div className=" d-flex flex-row justify-content-around w-100">
                    {
                        tabs.map((tab, index) => (
                            <NavItem key={`tab-${index}`}>
                                <NavLink to={tab.route} className="nav-link">
                                    <BottomNavText className="row justify-content-center align-items-center">
                                        <FontAwesomeIcon size="lg" icon={tab.icon}/>
                                        <div className='text-center'>{tab.label}</div>
                                    </BottomNavText>
                                </NavLink>
                            </NavItem>
                        ))
                    }
                </div>
            </Nav>
        </BottomNavDiv>

    );
}

export default BottomNav;