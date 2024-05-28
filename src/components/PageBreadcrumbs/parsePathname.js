import startCase from 'lodash/startCase'

export function parsePathname(pathname) {
  // Ignore the first two paths. First entry is empty, second entry is the business slug.
  const paths = pathname
    .split('/')
    .slice(2)
    .filter((path) => !!path)
  const count = paths.length

  let partialPath = ''

  const crumbs = paths.map((path, i) => {
    const href = `${partialPath}/${path}`
    let isLink = i + 1 < count
    let title = startCase(path)

    partialPath = href

    if (path === 'reports') {
      isLink = false
    }

    // No translation s are used since all other pathname strings are only in English.
    if (Number(path)) {
      title = 'Details'
    } else if (path.startsWith('class-')) {
      title = 'Class Check-In'
    } else if (path.startsWith('enrollment-')) {
      title = 'Enrollment Check-In'
    } else if (path === 'mrr') {
      title = 'Monthly Recurring Revenue (MRR)'
    } else if (path === 'plans') {
      title = 'Plan Management'
    } else if (path === 'settings') {
      title = 'Business Settings'
    } else if (path === 'equipment') {
      title = 'Equipment Management'
    } else if (path === 'documents') {
      title = 'Waivers & Terms'
    }

    return {
      isLink,
      title,
      href,
    }
  })

  if (crumbs.length > 0 && crumbs[0].href !== '/') {
    crumbs.unshift({
      isLink: true,
      title: 'Home',
      href: '/',
    })
  }

  return crumbs
}
