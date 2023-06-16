type Valid<Value> = { isValid: true; value: Value };
type Invalid<Err> = { isValid: false; error: Err };
type Result<Value, Err> = Valid<Value> | Invalid<Err>;

export const valid = <Value>(value: Value): Valid<Value> => ({
  isValid: true,
  value,
});
export const invalid = <Err>(error: Err): Invalid<Err> => ({
  isValid: false,
  error,
});

export const isValid = <Value>(
  args: Result<Value, unknown> | any
): args is Valid<Value> => args.isValid;
export const isInvalid = <Err>(
  args: Result<unknown, Err> | any
): args is Invalid<Err> => !args.isValid;

const fn = (value: number) => {
  if (value === 0) return valid("a" as const);
  if (value === 1) return invalid("b" as const);
  if (value === 2) return valid(true as const);
  if (value === 3) return invalid([1] as const);
  if (value === 4) return valid("" as const);

  return invalid("error" as const);
};

const main = () => {
  const result = fn(0);

  if (isValid(result)) {
    if (result.value === "a") return;
    return;
  }

  result.error;
};

main();
