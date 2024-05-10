"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import Image from "next/image";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4 pt-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Your 
        <img
          src="/assets/icons/wikis.png"
          width={32}
          height={32}
          alt="wikis"
          className="m-2 inline-flex"
        />
        Ideas, 
        <img
          src="/assets/icons/docs.png"
          width={32}
          height={32}
          alt="docs"
          className="m-2 inline-flex"
        />
        Documents, & 
        <img
          src="/assets/icons/projects.png"
          width={42}
          height={42}
          alt="projects"
          className="m-2 inline-flex"
        />
        Plans. Unified. Welcome to{" "}
        <span className="underline">AK World...!</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        AK World is the connected workspace where better, faster work happens.
      </h3>
      <Button>
        Get AK free <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
