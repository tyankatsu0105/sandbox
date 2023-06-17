import { invalid, isValid, valid } from "./shared/error";

const fn = (value: number) => {
  if (value === 0) return valid("a" as const);
  if (value === 1) return invalid("b" as const);
  if (value === 2) return valid(true as const);
  if (value === 3) return invalid([1] as const);
  if (value === 4) return valid("" as const);

  return invalid("error" as const);
};

const main = () => {
  const result = fn(10);

  if (isValid(result)) {
    console.log(result.value);
    return;
  }

  console.log(result.error);
};

main();
