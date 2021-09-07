import React from "react";
import useTicketState from "../../hooks/useTicketState";
import styles from "./styles.module.scss";

export const Ticket = ({ ticket }) => {
  const { toggleTicketStatus } = useTicketState();
  if (!ticket || !ticket.id) {
    return null;
  }
  const { id, title, isCompleted, childTickets } = ticket;

  const handleToggleTicketStatus = () => {
    toggleTicketStatus(id);
  };

  const renderChildTickets = () => {
    if (!childTickets || !childTickets.length) {
      return null;
    }
    return (
      <div className={styles.ChildTicketContainer}>
        {childTickets.map((childTicket) => (
          <Ticket key={childTicket.id} ticket={childTicket} />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.Ticket}>
      <div className={styles.TicketStatus}>
        <div>ID: {id}</div>
        <div>Title: {title}</div>
        <div>Completed: {isCompleted ? "Yes" : "No"}</div>
        <div>
          <button onClick={handleToggleTicketStatus}>Convert Status</button>
        </div>
      </div>
      {renderChildTickets()}
    </div>
  );
};
