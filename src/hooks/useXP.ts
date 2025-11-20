import { useSelector } from "react-redux";
import { RootState } from "src/data/redux/store";
import { xpForNext } from "src/data/redux/slices/xpSlice";

export default function useXP() {
  const xpState = useSelector((s: RootState) => s.xp);
  const level = xpState.level;
  const currentXP = xpState.currentXP;
  const xpToNext = xpForNext(level);
  const progress = xpToNext > 0 ? currentXP / xpToNext : 0;
  const xpRemaining = xpToNext - currentXP;

  return {
    level,
    currentXP,
    xpToNext,
    progress,
    xpRemaining,
    xpTotal: xpState.xpTotal,
  };
}
