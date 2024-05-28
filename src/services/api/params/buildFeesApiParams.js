export function buildFeesApiParams({
    page,
    pageSize,
    search,
    // enrollment,
    contact_number,
    contact_email,
    semester_number,
    // fees__name,
  }) {
    return {
      page,
      per_page: pageSize,
      search: search || undefined,
      // enrollment: enrollment || undefined,
      contact_number: contact_number || undefined,
      contact_email: contact_email || undefined,
      semester_number: semester_number || undefined,
      // fees__name: fees__name || undefined,
    };
  }
  