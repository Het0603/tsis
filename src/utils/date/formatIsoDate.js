// IMPORTANT: This should only be used by internal code (maybe hydrating form
// state). If formatting dates for display in a component, see DateUtilsContext.

import { toDateTime } from "./toDateTime";

export function formatIsoDate(date, timezone) {
  return toDateTime(date, timezone).toISODate();
}
