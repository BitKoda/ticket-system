import TicketItem from "./TicketItem";
export default function TicketHistory({tickets, updateResolved, deleteResolvedTicket}) {
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
                      deleteResolvedTicket = {deleteResolvedTicket}
                      ticket = {ticket}
                    />
                    )
                })}
              </ul>
            </div>
          </div>
      )
}
