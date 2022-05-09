import {Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const TopNavDiv = styled.div `
  background-color: #fff;
`;

const TopNavA = styled.a `
  color: #000000 !important;
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
                        <NavLink to="/play" className="nav-link" style={({isActive}) => (isActive ? {color: '#FF8FAB', background: '#f0f0f0'} : {color: '#000000'})}>
                            공연
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/community" className="nav-link" style={({isActive}) => (isActive ? {color: '#FF8FAB', background: '#f0f0f0'} : {color: '#000000'})}>
                            커뮤니티
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/myCargo" className="nav-link" style={({isActive}) => (isActive ? {color: '#FF8FAB', background: '#f0f0f0'} : {color: '#000000'})}>
                            내 창고
                        </NavLink>
                    </NavItem>
                </Nav>

            </div>
        </TopNavDiv>
    )
};

export default TopNav;