import {Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const TopNavDiv = styled.div `
  background-color: #FB6F92;
`;

const TopNavText = styled.div `
  color: #fff;
`
const TopNavA = styled.a `
  color: #fff !important;
`

function TopNav() {
    return (
        <TopNavDiv
            className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top"
            role="navigation">
            <div className="container-fluid">
                <TopNavA className="navbar-brand" href="/">TicketMayo</TopNavA>

                <Nav className="ml-auto">
                    <NavItem>
                        <NavLink to="/yes24" className="nav-link">
                            <TopNavText>예스24</TopNavText>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/interpark" className="nav-link">
                            <TopNavText>인터파크</TopNavText>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/myCargo" className="nav-link">
                            <TopNavText>내 창고</TopNavText>
                        </NavLink>
                    </NavItem>
                </Nav>

            </div>
        </TopNavDiv>
    )
};

export default TopNav;