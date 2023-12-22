export type Data = { selectedValue: string };

export type Err = { code: number; message: string };

export type State = {
  data: Data;
  err: Err | null;
  showDialog: boolean;
};

export const initialState: State = {
  data: { selectedValue: "" },
  err: null,
  showDialog: false,
};

export const handleFail = (
  prevState: State,
  showDialog: boolean,
  err: Err
): State => ({
  ...prevState,
  err,
  showDialog,
});

export const handleSuccess = (data: Data, showDialog: boolean): State => ({
  data,
  err: null,
  showDialog,
});
