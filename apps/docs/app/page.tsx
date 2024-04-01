import {Spacer} from "@vhsys-ui/spacer";

import {Community} from "@/components/marketing/community";

export default async function Home() {
  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow">
      <section className="flex flex-col items-center justify-center">
        <Community />
        <Spacer y={24} />
      </section>
    </main>
  );
}
