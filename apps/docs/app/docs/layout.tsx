import manifest from "@/config/routes.json";
import {DocsSidebar} from "@/components/docs/sidebar";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({children}: DocsLayoutProps) {
  return (
    <>
      <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
        <div className="grid grid-cols-12">
          <div className="hidden overflow-visible relative z-10 lg:block lg:col-span-2 mt-8 pr-4">
            <DocsSidebar routes={manifest.routes} />
          </div>
          {children}
        </div>
      </main>
    </>
  );
}
