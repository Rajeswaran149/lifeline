
import EmergencyAlert from "./Home/pages/emergencyAlert";
import HomePage from "./Home/pages/homePage";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/emergency-alert" element= {<EmergencyAlert/>}/>
      </Routes>
    </Router>
  );
}

export default App;
