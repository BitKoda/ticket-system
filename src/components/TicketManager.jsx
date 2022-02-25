import { useState } from "react";
import HelpForm from "./HelpForm";
import TicketHistory from "./TicketHistory";

export default function TicketManager() {
        const ticketList = [
        {username: "Adam", problem: "Don't understand React!", zoomUrl:"zoom-link", resolved: true}, 
        {username: "Steve", problem: "Don't get React!", zoomUrl:"zoom-link-2", resolved: false}, 
        {username: "John", problem: "Don't want to do React!", zoomUrl:"zoom-link-3", resolved: false}
        ] ;
    
        const [tickets, setTickets] = useState(ticketList);
    
        const updateResolved = (ticketToUpdate) => {
            const updatedTickets = tickets.map((ticket) => {
              if (ticket === ticketToUpdate){
                return {...ticket, resolved: !ticket.resolved}
              }
               else {
                 return ticket
               }
            })
            setTickets(updatedTickets);
        }
    
        const addTicket = (ticketToAdd) => {
          setTickets((tickets) =>{
            return [ticketToAdd, ...tickets]
          })
        }

        const [form, setForm] = useState({username: "", problem: "", zoomUrl: "", resolved: false})
        
        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setForm(values => ({...values, [name]: value }));
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            addTicket(form);
            setForm({username: "", problem: "", zoomUrl: "", resolved: false});
        }

        const handleClick = (e) => {
          e.preventDefault();
          console.log(e);
          //setTickets(values => ({...values, [resolved]: !tickets.resolved }))
        }

    return (
        <>
        <HelpForm form = {form} handleChange = {handleChange} handleSubmit = {handleSubmit}/>
        <TicketHistory tickets = {tickets} updateResolved= {updateResolved} />
        </>
    )
}