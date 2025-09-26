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
        <div className="flex flex-row gap-[8px]">
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
          <div className="w-[400px] hidden md:block">
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
    link: "#",
    title: "Mon portfolio",
    description: "Flytzi",
    language: "React, Next.js, Tailwind",
    image: "/img/works/portfolio.png",
  },
  // {
  //   link: "https://tansi.dev",
  //   title: "Tansi MAKELE",
  //   description: "Portfolio",
  //   language: "Next.js, Sanity, Tailwind",
  //   image: "/img/stack/Intel®-Core™-i5-14400F.png",
  // },
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
      className={`flex items-center justify-between group px-[16px] py-[8px] rounded-md transition-colors
        ${props.isActive ? "bg-accent/70" : "hover:bg-accent/50"}
      `}
    >
      <h3 className="text-base font-bold text-foreground">{props.title}</h3>
      <p className="text-sm text-foreground">{props.description}</p>
      <p className="inline-block text-foreground text-xs font-mono">
        {props.language}
      </p>
      <ArrowUpRight className="size-[15px] text-foreground" />
    </Link>
  );
};
