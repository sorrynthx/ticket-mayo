import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../components/Home';
import Interpark from '../components/Interpark';
import MyCargo from '../components/MyCargo';
import Yes24 from '../components/Yes24';
import Navigation from '../components/Nav/Navigation';


function Router() {
    return (       
        <BrowserRouter>
            {/* Navigation */}
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/yes24" element={<Yes24 />} />
                <Route path="/interpark" element={<Interpark />} />
                <Route path="/myCargo" element={<MyCargo />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;