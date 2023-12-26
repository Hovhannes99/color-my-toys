import viteLogo from '/vite.svg'
import Layout from "./layout";
import {BrowserRouter} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Layout>

                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>

            </Layout>
        </BrowserRouter>

    )
}

export default App
