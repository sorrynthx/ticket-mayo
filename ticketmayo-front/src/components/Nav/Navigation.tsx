import BottomNav from "./BottomNav";
import TopNav from "./TopNav";
import {NavLink, Params, Location, useParams, useLocation} from 'react-router-dom';

const getRoutePath = (location: Location, params: Params): string => {
    const { pathname } = location;
  
    if (!Object.keys(params).length) {
      return pathname; // we don't need to replace anything
    }
  
    let path = pathname;
    Object.entries(params).forEach(([paramName, paramValue]) => {
      if (paramValue) {
        path = path.replace(paramValue, `:${paramName}`);
      }
    });
    return path;
};

function Navigation() {
    
    const location = useLocation();
    const params = useParams();
    const path = getRoutePath(location, params);
    
    return (
        <>
            <TopNav path={path} />
            <BottomNav path={path} />
        </>
    );
}

export default Navigation;