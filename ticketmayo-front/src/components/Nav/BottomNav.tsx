import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const tabs = [{
    route: "/",
    icon: faHome,
    label: ""
  },{
    route: "/yes24",
    icon: faSearch,
    label: ""
  },{
    route: "/Interpark",
    icon: faUserCircle,
    label: ""
  },{
    route: "/myCargo",
    icon: faUserCircle,
    label: ""
  }];



function BottomNav() {
    return (
      <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) =>(
                <NavItem key={`tab-${index}`}>
                  <NavLink to={tab.route} className="nav-link">
                    <div className="row justify-content-center align-items-center">
                      <FontAwesomeIcon size="lg" icon={tab.icon}/>
                      <div>{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
    );
}

export default BottomNav;