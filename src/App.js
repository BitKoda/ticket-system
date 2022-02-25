import './App.css';
import Header from './components/Header';
import TicketManager from './components/TicketManager';


export default function App() {
  return (
    <div>
      <section id="form-section"> 
        <Header/>
        <TicketManager />
      </section>
    </div>
  );
}