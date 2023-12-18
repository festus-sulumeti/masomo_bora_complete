// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './Components/Detail';
// import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Home from './Components/Home/Home';
import ManageTeam from './Components/Home/ManageTeam';
import ContactsInformation from './Components/Home/ContactsInformation';
import InvoicesBalances from './Components/Home/InvoicesBalances';
import StudentForm from './Components/Home/StudentForm';
import General from './Components/Home/General';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Detail />} />
          {/* <Route path="/Signup" element={<Signup />} /> */}
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Home" element={<Home />}>
            <Route path="General" element={<General />} />
            <Route path="ManageTeam" element={<ManageTeam />} />
            <Route path="ContactsInformation" element={<ContactsInformation />} />
            <Route path="InvoicesBalances" element={<InvoicesBalances />} />
            <Route path="StudentForm" element={<StudentForm />} />
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
