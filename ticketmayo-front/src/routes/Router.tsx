import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Community from '../components/Community/Community';

import Home from '../components/Home/Home';
import Interpark from '../components/Play/Interpark';
import Login from '../components/Login/Login';
import LoginNaver from '../components/Login/LoginNaver';
import LoginNaverCallback from '../components/Login/LoginNaverCallback';
import MyCargo from '../components/MyCargo/MyCargo';
import MyCargoFaq from '../components/MyCargo/MyCargoFaq';
import MyCargoMy from '../components/MyCargo/MyCargoMy';
import MyCargoNotice from '../components/MyCargo/MyCargoNotice';
import MyCargoPartnership from '../components/MyCargo/MyCargoPartnership';
import MyCargoTheme from '../components/MyCargo/MyCargoTheme';
import Navigation from '../components/Nav/Navigation';
import Play from '../components/Play/Play';
import PlayDetail from '../components/Play/PlayDetail';
import Yes24 from '../components/Play/Yes24';

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