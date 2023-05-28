export function joinClassNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function isUndefined<T>(item: T | undefined): item is undefined {
  return item === undefined
}

export function deduceCompassSize(size: 'xs' | 'sm' | 'md' | 'lg'): string {
  if (size === 'xs') return '32px'
  if (size === 'sm') return '64px'
  if (size === 'md') return '100px'
  return '150px'
}

export function deducePerspective(size: 'xs' | 'sm' | 'md' | 'lg'): number {
  return size === 'lg' ? 250 : size === 'md' ? 130 : 75
}
