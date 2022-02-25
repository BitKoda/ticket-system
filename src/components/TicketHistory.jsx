import {useState} from "react";
import TicketItem from "./TicketItem";

export default function TicketHistory() {
    
    const ticketList = [
    {username: "Adam", problem: "Don't understand React!", zoomUrl:"zoom-link", resolved: true}, 
    {username: "Steve", problem: "Don't get React!", zoomUrl:"zoom-link-2", resolved: false}, 
    {username: "John", problem: "Don't want to do React!", zoomUrl:"zoom-link-3", resolved: false}
    ] ;

    const [tickets, setTickets] = useState(ticketList);

    const updateResolved = (ticketToUpdate) => {
        const updatedTickets = tickets.map((ticket) => {
          if (ticket === ticketToUpdate){
            return {...ticket, resolved:!ticket.resolved}
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

      return (
          <div id="ticketHistory">
            <h2>
                Tickets
            </h2>
            <div id="ticketHistoryContainer">
              <ul>
                {tickets.map((ticket) => {
                  return(
                    <TicketItem
                      key = {ticket.zoomUrl}
                      updateResolved = {updateResolved}
                      ticket = {ticket}
                    />
                    )
                })}
              </ul>
            </div>
          </div>
      )
}
