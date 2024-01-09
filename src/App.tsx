import Layout from "./layout";
import {BrowserRouter} from 'react-router-dom';
import Routes from "@/routes";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App() {
    return (
            <BrowserRouter>
                <Layout>
                    <Routes/>
                </Layout>
            </BrowserRouter>
    )
}

export default App
