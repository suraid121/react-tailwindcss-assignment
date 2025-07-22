import './App.css'
import NavBar from './common-components/NavBar';
import Incidents from './Incidents/Incidents';
import Dashboard from './Dashboard/Dashboard';
import StepOne from './Incidents/StepOne';
import StepTwo from './Incidents/StepTwo';
import StepThree from './Incidents/StepThree';
import StepFour from './Incidents/StepFour';
import Location from './Location/location';
import Documents from './Documents/Documents';
import Activities from './Activities/Activities';
import CypherAI from './ChatBox/ChatBox';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
function App() {


  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Incidents" element={<Incidents />} />
        <Route path="/Incidents/StepOne" element={<StepOne />} />
        <Route path="/Incidents/StepTwo" element={<StepTwo />} />
        <Route path="/Incidents/StepTwo" element={<StepTwo />} />
        <Route path="/Incidents/StepThree" element={<StepThree />} />
        <Route path="/Incidents/StepFour" element={<StepFour />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Activities" element={<Documents />} />
        <Route path="/Documents" element={<Activities />} />
        <Route path="/CypherAI" element={<CypherAI />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
