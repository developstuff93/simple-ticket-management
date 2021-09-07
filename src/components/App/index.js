import React from "react";
import Tickets from "../Tickets";
import TicketStateProvider from "../TicketStateProvider";
import styles from "./styles.module.scss";

function App() {
  return (
    <TicketStateProvider>
      <div className={styles.Root}>
        <div className={styles.Header}>
          <h2>Task Management</h2>
        </div>
        <div className={styles.Main}>
          <Tickets />
        </div>
      </div>
    </TicketStateProvider>
  );
}

export default App;
