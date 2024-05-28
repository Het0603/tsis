import { DateTime } from "luxon";

// date is a string, number (milliseconds) or Date object
export function toDateTime(date, timezone = "local") {
  let dt;
  if (!date) {
    dt = DateTime.utc().setZone(timezone);
  } else if (DateTime.isDateTime(date)) {
    dt = date.setZone(timezone);
  } else if (typeof date === "string") {
    dt = DateTime.fromISO(date, { zone: timezone });
  } else if (typeof date === "number") {
    dt = DateTime.fromMillis(date, { zone: timezone });
  } else {
    dt = DateTime.fromJSDate(date, { zone: timezone });
  }

  return dt;
}
