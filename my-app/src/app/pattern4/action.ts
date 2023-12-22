"use server";

import { values } from "@/app/_components/Select/values";
import { State, handleFail, handleSuccess, initialState } from "./state";

export async function action(
  prevState: State,
  formData: FormData
): Promise<State> {
  const select = formData.get("select");
  if (typeof select !== "string" || select === "err") {
    throw new Error("test");
  }
  if (prevState.showDialog) {
    return handleSuccess(prevState.data, false);
  }
  if (select === prevState.data.selectedValue) {
    return prevState;
  }
  if (!values.includes(select)) {
    return handleFail(prevState, true, {
      code: 400,
      message: `Does not match expected value`,
    });
  }
  return handleSuccess({ selectedValue: select }, true);
}
