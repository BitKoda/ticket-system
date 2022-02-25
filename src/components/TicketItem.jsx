export default function TicketItem({ticket, updateResolved, deleteResolvedTicket}) {
    return (
        <li className="single-ticket-list">
            <h3> Hello, {ticket.username} </h3>
            <p> {ticket.problem} </p>
            <a href={ticket.zoomUrl} > Click here to join the zoom </a>
            <p> Your ticket is being assigned to: {ticket.tutor}</p>
            <hr></hr>
            <button className={ticket.resolved ? "resolved" : "open"} onClick={() => updateResolved(ticket)}>
                {ticket.resolved ? "Resolved" : "Open"}
            </button>
            <button className={ticket.resolved ? "display" : "hide"} 
                    onClick={() => deleteResolvedTicket(ticket)}>
                Delete
            </button>
        </li>

    )
}