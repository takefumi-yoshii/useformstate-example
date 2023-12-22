"use server";

import { values } from "@/app/_components/Select/values";
import { State, handleFail, handleSuccess } from "./state";

export async function action(
  prevState: State,
  formData: FormData
): Promise<State> {
  const select = formData.get("select");
  if (typeof select !== "string" || select === "err") {
    throw new Error("test");
  }
  if (select === prevState.data.selectedValue) {
    return prevState;
  }
  if (!values.includes(select)) {
    return handleFail(prevState, {
      code: 400,
      message: `Does not match expected value`,
    });
  }
  return handleSuccess({
    selectedValue: select,
  });
}
