type Valid<Value> = { type: "valid"; value: Value };
type Invalid<Err> = { type: "invalid"; error: Err };
type Result<Value = unknown, Err = unknown> = Valid<Value> | Invalid<Err>;

export const valid = <Value>(value: Value): Valid<Value> => ({
  type: "valid",
  value,
});
export const invalid = <Err>(error: Err): Invalid<Err> => ({
  type: "invalid",
  error,
});

export const isValid = (result: Result): result is Valid<unknown> =>
  result.type === "valid";
export const isInvalid = (result: Result): result is Invalid<unknown> =>
  result.type === "invalid";
