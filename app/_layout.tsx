
import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GluestackUIProvider mode="dark">
      {children}
    </GluestackUIProvider>
  );
}
