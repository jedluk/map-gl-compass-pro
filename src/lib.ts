export function joinClassNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function isUndefined<T>(item: T | undefined): item is undefined {
  return item === undefined
}
