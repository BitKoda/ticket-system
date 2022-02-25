export default function TicketItem({ticket,updateResolved}) {
    return (
        <li className="single-ticket-list">
            <h3> Hello, {ticket.username} </h3>
            <p> {ticket.problem} </p>
            <a href={ticket.zoomUrl} > Click here to join the zoom </a>
            <button className="open">Open</button>
        </li>

    )
}