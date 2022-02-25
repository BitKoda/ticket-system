import './App.css';
import Header from './components/Header';
import HelpForm from './components/HelpForm';
import TicketHistory from './components/TicketHistory';

export default function App() {
  return (
    <div>
      <section id="form-section"> 
      <Header/>
      <HelpForm/>
      </section>
      <hr></hr>
      <TicketHistory/>
    </div>
  );
}