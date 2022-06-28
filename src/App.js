import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import Home from './pages/Home/Home.js'
import InformationDetail from './components/InformationDetail/InformationDetail.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/my-blog" element={<Home/>}/>
                <Route path="/s" element={<InformationDetail/>}/>

            </Routes>
        </Router>
    );
}

export default App;
