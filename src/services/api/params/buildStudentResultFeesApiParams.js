export function buildStudentResultsListApiParams({
  page,
  pageSize,
  search,
  semester,
  test_type,
}) {
  return {
    page,
    per_page: pageSize,
    search: search || undefined,
    semester: semester || undefined,
    test_type: test_type || undefined,
  };
}
