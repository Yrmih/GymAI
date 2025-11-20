export function calculateStreak(checkins: string[]): number {
  if (!checkins.length) return 0;

  const sorted = [...checkins].sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  let streak = 1;

  for (let i = sorted.length - 1; i > 0; i--) {
    const prev = new Date(sorted[i - 1]);
    const curr = new Date(sorted[i]);

    const diff = (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) streak++;
    else break;
  }

  return streak;
}
