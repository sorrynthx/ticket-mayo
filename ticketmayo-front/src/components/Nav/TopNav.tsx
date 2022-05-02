import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function TopNav() {
    return (
      <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Brand</a>
            <Nav className="ml-auto">
              <NavItem>
                <NavLink to="/yes24" className="nav-link">
                  Yes24
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/interpark" className="nav-link">
                  Interpark
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/myCargo" className="nav-link">
                  MyCargo
                </NavLink>
              </NavItem>
            </Nav>
        </div>
      </nav>
    )
};

export default TopNav;