// app/(main)/_layout.tsx
import { Slot } from 'expo-router';

export default function MainLayout() {
  return <Slot />; // Renderiza index.tsx, exercises.tsx, etc.
}
