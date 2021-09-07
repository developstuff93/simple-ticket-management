import { useContext } from "react";
import { TicketStatueContext } from "../components/TicketStateProvider";

export default function useTicketState() {
  const context = useContext(TicketStatueContext);
  if (!context) {
    throw new Error(
      "useTicketState can only be used within an TicketStateProvider"
    );
  }
  return context;
}
