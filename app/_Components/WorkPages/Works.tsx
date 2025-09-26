"use client";

import { ArrowUpRight, FolderCheck } from "lucide-react";
import { Section } from "../Section";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export const Works = () => {
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const listProjects = WORKS_LIST.length;
  return (
    <Section className="flex flex-col gap-10 py-10">
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-center gap-2">
          <FolderCheck className="text-foreground size-[22px]" />
          <h2 className="text-lg text-foreground font-semibold">
            Quelque projets ({listProjects}/5)
          </h2>
        </div>
        <div className="flex flex-row gap-[16px]">
          <div className="flex-1 flex flex-col gap-[4px]">
            {WORKS_LIST.map((item, idx) => (
              <WorkCard
                key={item.title + idx}
                {...item}
                onHover={() => setHoveredIdx(idx)}
                isActive={hoveredIdx === idx}
              />
            ))}
          </div>
          <div className="w-[400px] hidden lg:block">
            <Image
              src={WORKS_LIST[hoveredIdx].image}
              alt={WORKS_LIST[hoveredIdx].title}
              width={500}
              height={300}
              className=""
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

const WORKS_LIST = [
  {
    link: "https://alexis-dejesus.vercel.app/",
    title: "Mon portfolio",
    description: "Flytzi",
    language: "React, Next.js, Tailwind",
    image: "/img/works/portfolio.png",
  },
  {
    link: "https://sz-fivem.vercel.app/garage",
    title: "Menu FiveM",
    description: "Flytzi",
    language: "Next.js, Sanity, Tailwind",
    image: "/img/works/fivem-nui.png",
  },
];

type WorkCardProps = {
  title: string;
  description: string;
  link: string;
  language: string;
  image: string;
  onHover: () => void;
  isActive: boolean;
};

const WorkCard = (props: WorkCardProps) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={props.link}
      onMouseEnter={props.onHover}
      className={`grid grid-cols-4 group px-[16px] py-[8px] rounded-md transition-all duration-200 ease-in-out
        ${
          props.isActive
            ? "bg-accent"
            : "hover:bg-accent/40 hover:shadow-sm hover:scale-[1.02]"
        }
      `}
    >
      <h3 className="flex items-center text-base font-bold text-foreground group-hover:text-foreground/90 transition-colors">
        {props.title}
      </h3>
      <p className="flex items-center text-sm text-foreground group-hover:text-foreground/80 transition-colors">
        {props.description}
      </p>
      <p className="flex items-center text-foreground text-xs font-mono group-hover:text-foreground/70 transition-colors">
        {props.language}
      </p>
      <div className="flex items-center justify-end">
        <ArrowUpRight className="size-[15px] text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
      </div>
    </Link>
  );
};
