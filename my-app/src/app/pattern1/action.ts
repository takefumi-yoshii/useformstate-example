"use server";

import { values } from "@/app/_components/Select/values";
import { State } from "./state";

export async function action(_: State, formData: FormData) {
  const select = formData.get("select");
  if (typeof select !== "string" || select === "err") {
    throw new Error("test");
  }
  if (!values.includes(select)) {
    return `Does not match expected value`;
  }
  return select;
}
