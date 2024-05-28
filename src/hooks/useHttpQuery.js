import { useQuery } from "react-query";
import buildQueryKey from "src/utils/buildQueryKeys";

// key must be a string or object - if object then MUST include 'id' property
export default function useHttpQuery({
  key,
  apiFn,
  apiFnArgs = [],
  config = {},
}) {
  const keyObj = typeof key === "string" ? { id: key } : key;
  const { id: keyId, ...keyParams } = keyObj;

  const queryKey = buildQueryKey(keyId, keyParams, ...apiFnArgs);
  const queryFn = () => apiFn(...apiFnArgs);

  return useQuery(queryKey, queryFn, config);
}
