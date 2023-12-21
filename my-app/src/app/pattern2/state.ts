export type Data = { selectedValue: string };

export type Err = { code: number; message: string };

export type State = {
  data: Data;
  err: Err | null;
};

export const initialState: State = {
  data: { selectedValue: "" },
  err: null,
};
