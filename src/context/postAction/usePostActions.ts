import { useContext } from "react";
import { PostActionContext } from "./PostActionContext";

export function usePostActions() {
  const context = useContext(PostActionContext);

  if (!context) {
    throw new Error("usePostActions must be used inside PostActionProvider");
  }

  return context;
}
