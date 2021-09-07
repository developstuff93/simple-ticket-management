import React, { createContext, useState } from "react";
import { MockTickets } from "../../constants";

export const TicketStatueContext = createContext(null);

export default function TicketStateProvider({ children }) {
  const [tickets, setTickets] = useState(MockTickets);

  const updateTicketStatus = (ticket, id) => {
    return {
      ...ticket,
      isCompleted: ticket.id === id ? !ticket.isCompleted : ticket.isCompleted,
      childTickets: ticket.childTickets.map((childTicket) =>
        updateTicketStatus(childTicket, id)
      ),
    };
  };

  const toggleTicketStatus = (id) => {
    setTickets((tickets) =>
      tickets.map((ticket) => updateTicketStatus(ticket, id))
    );
  };

  const value = {
    tickets,
    toggleTicketStatus,
  };

  return (
    <TicketStatueContext.Provider value={value}>
      {children}
    </TicketStatueContext.Provider>
  );
}
