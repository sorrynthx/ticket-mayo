import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Community from '../components/Community';

import Home from '../components/Home';
import Interpark from '../components/Interpark';
import Login from '../components/Login';
import LoginNaver from '../components/LoginNaver';
import LoginNaverCallback from '../components/LoginNaverCallback';
import MyCargo from '../components/MyCargo';
import MyCargoFaq from '../components/MyCargoFaq';
import MyCargoMy from '../components/MyCargoMy';
import MyCargoNotice from '../components/MyCargoNotice';
import MyCargoPartnership from '../components/MyCargoPartnership';
import MyCargoTheme from '../components/MyCargoTheme';
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
                <Route path="/play" element={<Play />} />
                <Route path="/play/interpark" element={<Interpark />} />
                <Route path="/play/yes24" element={<Yes24 />} />

                <Route path="/play/interpark/:playId/detail" element={<PlayDetail />} />
                <Route path="/play/yes24/:playId/detail" element={<PlayDetail />} />
                <Route path="/community" element={<Community />} />
                
                <Route path="/myCargo" element={<MyCargo />} />
                <Route path="/myCargo/My" element={<MyCargoMy />} />
                <Route path="/myCargo/Theme" element={<MyCargoTheme />} />
                <Route path="/myCargo/Notice" element={<MyCargoNotice />} />
                <Route path="/myCargo/Faq" element={<MyCargoFaq />} />
                <Route path="/myCargo/Partnership" element={<MyCargoPartnership />} />

                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/loginNaver" element={<LoginNaver />} />
                <Route path="/loginNaver/callback" element={<LoginNaverCallback />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;