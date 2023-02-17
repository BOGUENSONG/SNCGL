import Layout from "./components/Layout/Layout"
import HomeContainer from "./containers/Home/HomeContainer"
import Register from "./containers/Home/Register"
import Login from "./containers/Home/Login"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {

  return (
    <BrowserRouter>
        <Layout>
                <Routes>
                  <Route path="/" element={<HomeContainer />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/Login" element={<Login />} />
                </Routes>
        </Layout>
    </BrowserRouter>


  );
}

export default App;
