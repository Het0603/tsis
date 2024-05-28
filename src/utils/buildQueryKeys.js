export default function buildQueryKey(key, ...args) {
    // Exclude falsy values and empty objects from the query key.
    const opts = args.filter((arg) => {
      if (arg !== null && typeof arg === 'object') {
        return Object.keys(arg).length !== 0
      }
  
      return !!arg
    })
  
    return [key, ...opts]
  }
  