export function isNewMonth(lastReset: string): boolean {
  const now = new Date();
  const last = new Date(lastReset);

  return (
    now.getFullYear() !== last.getFullYear() ||
    now.getMonth() !== last.getMonth()
  );
}
