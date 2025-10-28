
import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GluestackUIProvider mode="dark">
      {children}
    </GluestackUIProvider>
  );
}


// define barra de navegação, tema e GluestackUIProvider.

// Todas as telas dentro de (auth) ou (main) herdam esse layout.

// Uso de src/