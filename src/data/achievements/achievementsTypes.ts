export type Achievement = {
  id: string;
  name: string;
  description: string;
  icon: string;
  streak?: number;
  count?: number;
};

export type AchievementsData = {
  unique: Achievement[];
  monthly: Achievement[];
};
