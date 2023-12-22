"use client";

import { useFormState } from "react-dom";
import { Select } from "@/app/_components/Select";
import { SubmitButton } from "@/app/_components/SubmitButton";
import { SnackBar } from "@/app/_components/SnackBar";
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
      <Select name="select" defaultValue={state.data.selectedValue} />
      <br />
      <SubmitButton />
      <hr />
      <p>{state.data.selectedValue}</p>
      {state.updatedAt && (
        <SnackBar key={state.updatedAt} color={state.err ? "red" : "green"}>
          {state.err ? state.err.message : "succeeded update value!"}
        </SnackBar>
      )}
    </form>
  );
}
