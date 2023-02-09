import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Footer from './components/Footer';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <Navbar />
                <Outlet />

                <Footer />
            </AuthContextProvider>
        </QueryClientProvider>
    );
}

export default App;
