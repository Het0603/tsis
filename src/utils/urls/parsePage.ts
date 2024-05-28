export const PAGE_SIZE_STEPS = [10, 25, 50, 100];

export function parsePage(params: any, key = "page") {
  const value = params.get(key);

  const page = Math.floor(Number(value));
  const isValid = page && page > 0;

  return isValid ? page : 1;
}

export function parsePageSize(params: any, key = "size") {
  const value = params.get(key);
  const perPage = Math.floor(Number(value));
  const isValid = PAGE_SIZE_STEPS.includes(perPage);
  return isValid ? perPage : PAGE_SIZE_STEPS[1];
}
