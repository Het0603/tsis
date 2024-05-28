export function buildAdmissionApiParams({
  page,
  pageSize,
  search,
  name,
  city,
  admission_course,
}) {
  return {
    page,
    per_page: pageSize,
    search: search || undefined,
    name: name || undefined,
    city: city || undefined,
    admission_course: admission_course || undefined,
  };
}
