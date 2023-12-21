"use server";

import { values } from "@/app/_components/Select/values";
import { State, handleFail, handleSuccess } from "./state";

export async function action(
  prevState: State,
  formData: FormData
): Promise<State> {
  const select = formData.get("select");
  const openDialog = formData.get("openDialog");
  if (typeof select !== "string" || select === "err") {
    throw new Error("test");
  }
  if (typeof openDialog === "string" && openDialog === "true") {
    return handleSuccess({
      selectedValue: prevState.data.selectedValue,
    });
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
