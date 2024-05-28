export default function parsePaginatedResponse(res: any) {
  if (!res) {
    return {};
  }

  return {
    update: res,
    records: res.records,
    results: res.results,
    currentPage: res.current_page,
    totalPages: res.total_pages,
    totalCount: res.count,
  };
}
