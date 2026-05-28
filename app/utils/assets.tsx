export function asset(path: string): string {
  const base = import.meta.env.PROD ? '/personal-website/' : '/';
  return base + path.replace(/^\//, '');
}