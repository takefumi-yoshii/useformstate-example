import { ComponentPropsWithoutRef } from "react";

export function Select(props: ComponentPropsWithoutRef<"select">) {
  return (
    <select {...props}>
      <option value="foo">foo</option>
      <option value="bar">bar</option>
      <option value="baz">baz</option>
      <option value="err">err</option>
    </select>
  );
}
