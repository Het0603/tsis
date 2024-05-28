export function buildFeesListApiParams({
  page,
  pageSize,
  search,
  date,
  semester,
  fees_type,
  mode_of_payment,
  start_date,
  end_date,
}) {
  return {
    page,
    per_page: pageSize,
    search: search || undefined,
    date: date || undefined,
    semester: semester || undefined,
    fees_type: fees_type || undefined,
    mode_of_payment: mode_of_payment || undefined,
    start_date: start_date || undefined,
    end_date: end_date || undefined,
  };
}
