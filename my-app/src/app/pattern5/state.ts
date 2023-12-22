export type Data = { selectedValue: string };

export type Err = { code: number; message: string };

export type State = {
  data: Data;
  err: Err | null;
  updatedAt: string | null;
};

export const initialState: State = {
  data: { selectedValue: "" },
  err: null,
  updatedAt: null,
};

export const handleFail = (prevState: State, err: Err): State => ({
  ...prevState,
  err,
  updatedAt: Date.now().toString(),
});

export const handleSuccess = (data: Data): State => ({
  data,
  err: null,
  updatedAt: Date.now().toString(),
});
