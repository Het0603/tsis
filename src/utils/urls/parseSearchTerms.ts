export function parseSearchTerm(params: any, key = "q") {
  const value = params.get(key);

  return value ? value.trim() : "";
}
