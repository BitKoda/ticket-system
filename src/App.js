import './App.css';
import {useState} from "react";
import ReactDOM from 'react-dom';

function App() {
  const [form, setForm] = useState({username: "", problem: "", zoomUrl: ""})
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm(values => ({...values, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    HistoryLog();
  }
  const HistoryLog = () => {
    const helpLog = 
    <div>
      {Object.entries(form).map(([key,val]) => 
        <p key={key}> 
          {key}:{val}
        </p>
      )}
    </div>
    ReactDOM.render(helpLog, document.getElementById('helpLogContainer'));
  }

  return (
    <div>
      <section id="form-section"> 
        <h1>NC Help</h1>
        <form onSubmit={handleSubmit}> 
          <div class="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={form.username} name="username" onChange={handleChange} />
          </div>
          <div class="form-group">
            <label htmlFor="problem">How can we help?</label>
            <textarea id="problem" value={form.problem} name="problem" onChange={handleChange}></textarea>
          </div>
          <div class="form-group">
            <label htmlFor="zoomUrl">Zoom Link</label>
            <input type="text" id="zoomUrl" value={form.zoomUrl} name="zoomUrl" onChange={handleChange} />
          </div>
          <div class="form-group">
            <input type="submit" id="submit" value="Help me Helpdesk!"/>
          </div>
        </form>
      </section>
      <hr></hr>
      <h2>
        NC Help History Log
      </h2>
      <div id="helpLogContainer">

      </div>
    </div>
  );
}

export default App;
