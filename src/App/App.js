import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "../Header/Header";
import Login from "../Login_Password/Login";
import Intro from "../Intro/Intro";
import Footer from "../Footer/Footer";
import Subscription from "../Subscription/Subscription";
import Personal from "../Personal_Info/Personal";
import Credit from "../Credit/Credit";
import Approval from "../Approval/Approval";
import Review from "../Review/Review";


function App() {
  return (
      <Router>
          <Header />
        <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/login' element={<Login />} />
            <Route path='/subscription' element={<Subscription />} />
            <Route path='personal_info' element={<Personal />} />
            <Route path='credit_card' element={<Credit />} />
            <Route path='approval' element={<Approval />} />
            <Route path='review' element={<Review />} />
        </Routes>
          <Footer />
      </Router>

  );
}

export default App;
