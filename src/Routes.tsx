import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DetalheRelatorio } from './pages/DetalheRelatorio';

export function AppRoutes() {

    return (
        <>
         
                    <Router>
                        <Routes >
                            <Route path="/" element={<Home />} />
                            <Route path="/DetalheRelatorio/:nome" element={<DetalheRelatorio />} />
                        </Routes>
                    </Router>
        </>
    )
}