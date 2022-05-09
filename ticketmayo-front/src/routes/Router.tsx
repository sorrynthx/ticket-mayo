import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Community from '../components/Community';

import Home from '../components/Home';
import Interpark from '../components/Interpark';
import MyCargo from '../components/MyCargo';
import Navigation from '../components/Nav/Navigation';
import Play from '../components/Play';
import PlayDetail from '../components/PlayDetail';
import Yes24 from '../components/Yes24';

function Router() {
    return (       
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            {/* Navigation */}
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/play" element={<Play />} >
                    <Route path="interpark" element={<Interpark />} />
                    <Route path="yes24" element={<Yes24 />} />
                </Route>
                <Route path="/play/interpark/:playId/detail" element={<PlayDetail />} />
                <Route path="/play/yes24/:playId/detail" element={<PlayDetail />} />
                <Route path="/community" element={<Community />} />
                <Route path="/myCargo" element={<MyCargo />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;