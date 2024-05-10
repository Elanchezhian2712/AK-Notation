import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  // Perform any necessary data fetching here
  // For example:
  // const data = await fetchSomeData();
  // return { data };

  // Since there's no data fetching logic yet, you can simply return null
  return null;
};

import type { MetaFunction } from "@remix-run/node";
import { Heading } from "./(marketing)/_components/heading";
import { Heroes } from "./(marketing)/_components/heroes";
import { Footer } from "./(marketing)/_components/footer";
import { Navbar } from "./(marketing)/_components/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "AK World" },
    {
      name: "Notion Clone",
      content: "Notion clone with remix and tailwindCss",
    },
  ];
};

const MarketingPage = () => {
  return (
    <div>
      <div >
        <Navbar />
      </div>
      <div className="min-h-full flex flex-col p-2 pt-16">
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
          <Heading />
          <Heroes />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MarketingPage;
