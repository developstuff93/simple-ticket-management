import React from "react";
import { Ticket } from "../Ticket";
import useTicketState from "../../hooks/useTicketState";
import styles from "./styles.module.scss";

export default function Tickets() {
  const { tickets } = useTicketState();
  return (
    <div className={styles.Tickets}>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}
