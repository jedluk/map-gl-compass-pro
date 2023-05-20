export function joinClassNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function isUndefined<T>(item: T | undefined): item is undefined {
  return item === undefined
}

export function deduceCompassSize(size: 'sm' | 'md' | 'lg'): string {
  return size === 'sm' ? '50px' : size === 'md' ? '100px' : '150px'
}

export function deducePerspective(size: 'sm' | 'md' | 'lg'): number {
  return size === 'lg' ? 250 : size === 'md' ? 130 : 75
}
