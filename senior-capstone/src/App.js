import React, { Component } from 'react';
import './App.css';
import ReactDOM from "react-dom";


import { BrowserRouter as Router, Routes, Route, withRouter } from 'react-router-dom';
import Navbar from '/Users/apollosno/CSI-4999-Senior-Capstone-Project/senior-capstone/src/components/html-templates/Navbar.jsx'
import Footer from '/Users/apollosno/CSI-4999-Senior-Capstone-Project/senior-capstone/src/components/html-templates/Footer.jsx'
import Homepage from '/Users/apollosno/CSI-4999-Senior-Capstone-Project/senior-capstone/src/components/html-templates/Homepage.jsx'
import Charity_Request from '/Users/apollosno/CSI-4999-Senior-Capstone-Project/senior-capstone/src/components/html-templates/Charity_Request.jsx'
import Charity_Search from '/Users/apollosno/CSI-4999-Senior-Capstone-Project/senior-capstone/src/components/html-templates/Charity_Search.jsx'
import Create_Charity_Acc from '/Users/apollosno/CSI-4999-Senior-Capstone-Project/senior-capstone/src/components/html-templates/Create_Charity_Acc.jsx'
import Create_Donor_Acc from '/Users/apollosno/CSI-4999-Senior-Capstone-Project/senior-capstone/src/components/html-templates/Create_Donor_Acc.jsx'
import Donor_Donation from '/Users/apollosno/CSI-4999-Senior-Capstone-Project/senior-capstone/src/components/html-templates/Donor_Donation.jsx'
import Error from '/Users/apollosno/CSI-4999-Senior-Capstone-Project/senior-capstone/src/components/html-templates/Error.jsx'
import Header from '/Users/apollosno/CSI-4999-Senior-Capstone-Project/senior-capstone/src/components/html-templates/Header.jsx'
import Login from '/Users/apollosno/CSI-4999-Senior-Capstone-Project/senior-capstone/src/components/html-templates/Login.jsx'
import View_Donors from '/Users/apollosno/CSI-4999-Senior-Capstone-Project/senior-capstone/src/components/html-templates/View_Donors.jsx'


class App extends Component {
    render(){  
    return(
    <div>
    <Router>
      <Navbar />
      {window.location.pathname !=='/' ? <Header/>:null}
        <Routes>
          <Route exact path='/' element={<Homepage/>}  />
          <Route exact path='/charity_request' element={<Charity_Request/>}  />
          <Route exact path='/view_donors' element={<View_Donors/>}  />
          <Route exact path='/charity_search' element={<Charity_Search/>}  />
          <Route exact path='/donor_donation' element={<Donor_Donation/>}  />
          <Route exact path='/create_donor_acc' element={<Create_Donor_Acc/>}  />
          <Route exact path='/create_charity_acc' element={<Create_Charity_Acc/>}  />
          <Route exact path='/error' element={<Error/>}  />
          <Route exact path='/login' element={<Login/>}  />
        </Routes>
        <Footer />
    </Router>
    </div>
    
        );
    }
}
export default App;