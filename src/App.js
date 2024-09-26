import './App.css';
import { Header } from './Components/Header';
import { FirstPage } from './Components/FirstPageComponents';
import { DoctorAppointment } from './Components/DoctorApointment';

function App() {
  return ( 
    <div className="App">
       <Header />
       <FirstPage/>
       <DoctorAppointment/>
    </div>
  );
}

export default App;
