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

export const handleFail = (prevState: State, err: Err): State => ({
  ...prevState,
  err,
});

export const handleSuccess = (data: Data): State => ({
  data,
  err: null,
});
