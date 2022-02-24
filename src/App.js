import './App.css';
import {useState} from "react";


function App() {
  const [form, setForm] = useState({username: "", problem: "", zoomUrl: ""})
  const handleChange = (e) => {
    const name = e.target.name;
    console.log(name)
    const value = e.target.value;
    setForm(values => ({...values, [name]: value }))
    console.log(form)
  }

  return (
    <div>
      <h1>NC Help</h1>
      <form> 
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={form.username} name="username" onChange={handleChange} />

        <label htmlFor="problem">How can we help?</label>
        <textarea id="problem" value={form.problem} name="problem" onChange={handleChange}></textarea>
        
        <label htmlFor="zoomUrl">Zoom Link</label>
        <input type="text" id="zoomUrl" value={form.zoomUrl} name="zoomUrl" onChange={handleChange} />
        
        <button id="submit">Help!</button>
      </form>
    </div>
  );
}

export default App;
