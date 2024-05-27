import {Spacer} from "@vhsys-ui/spacer";

import {HomeLayout} from "@/components/home/home";

export default async function Home() {
  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow">
      <section className="flex flex-col items-center justify-center">
        <HomeLayout />
        <Spacer y={24} />
      </section>
    </main>
  );
}
