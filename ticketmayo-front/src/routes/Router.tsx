import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Community from '../components/Community';

import Home from '../components/Home';
import Interpark from '../components/Interpark';
import Login from '../components/Login';
import MyCargo from '../components/MyCargo';
import MyCargo_Faq from '../components/MyCargo_Faq';
import MyCargo_My from '../components/MyCargo_My';
import MyCargo_Notice from '../components/MyCargo_Notice';
import MyCargo_Partnership from '../components/MyCargo_Partnership';
import MyCargo_Theme from '../components/MyCargo_Theme';
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
                <Route path="/myCargo/My" element={<MyCargo_My />} />
                <Route path="/myCargo/Theme" element={<MyCargo_Theme />} />
                <Route path="/myCargo/Notice" element={<MyCargo_Notice />} />
                <Route path="/myCargo/Faq" element={<MyCargo_Faq />} />
                <Route path="/myCargo/Partnership" element={<MyCargo_Partnership />} />

                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;