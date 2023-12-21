"use client";

import { useFormState } from "react-dom";
import { Select } from "@/app/_components/Select";
import { SubmitButton } from "@/app/_components/SubmitButton";
import { action } from "./action";
import { State } from "./state";

export default function ClientComponent({
  initalState,
}: {
  initalState: State;
}) {
  const [state, dispatch] = useFormState(action, initalState);
  return (
    <form action={dispatch}>
      <Select name="select" defaultValue={state} />
      <br />
      <SubmitButton />
      <hr />
      <p>{state}</p>
    </form>
  );
}
