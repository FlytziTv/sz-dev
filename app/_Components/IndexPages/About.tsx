import { ReactNode } from "react";
import { Section } from "../Section";
import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CircleUserRound,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const About = () => {
  return (
    <div className="w-full">
      <Section className="flex flex-col gap-10 py-10">
        <div className="flex justify-center ">
          <div className="flex justify-center flex-col items-center gap-[8px]">
            <Image
              src="/img/aboutPages/me.jpg"
              alt="Description"
              width={120}
              height={120}
              className=" mb-[10px] rounded-[50%]"
            />
            <div className="flex italic flex-col items-center">
              <h1 className="font-[perandory] text-5xl font-medium text-foreground">
                Alexis De Jesus
              </h1>
              <p className="text-base font-light text-foreground">
                Etudiant en développement
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                size={"xs"}
                variant={"outline"}
                className="text-xs"
                asChild
              >
                <Link
                  href="https://www.instagram.com/aalexis.in/"
                  target="_blank"
                >
                  Instagram
                </Link>
              </Button>
              <Button
                size={"xs"}
                variant={"outline"}
                className="text-xs"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/alexis-dejesus/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </Button>
              <Button
                size={"xs"}
                variant={"outline"}
                className="text-xs"
                asChild
              >
                <Link href="https://github.com/FlytziTv" target="_blank">
                  GitHub
                </Link>
              </Button>
              <Button
                size={"xs"}
                variant={"outline"}
                className="text-xs"
                asChild
              >
                <Link
                  href="/document/cv_alexis_dejesus.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mon CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex max-md:flex-col items-stretch gap-[8px]">
          {/* Colonne gauche */}
          <div className="flex-1 flex flex-col p-4 rounded-md border border-solid border-border gap-[4px]">
            <div className="flex items-center gap-[4px]">
              <BriefcaseBusiness className="text-foreground size-[22px]" />
              <h2 className="text-lg text-foreground font-semibold">
                Mes Expériences
              </h2>
            </div>
            {works.map((item, idx) => (
              <Side key={item.title + idx} {...item} />
            ))}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:alexis.dejesus019@gmail.com"
              className="p-[8px] text-sm flex items-center justify-center rounded-sm border border-border bg-background/70 backdrop-blur hover:bg-border"
            >
              Souhaitez vous me recruter ?
            </a>
          </div>

          {/* Colonne droite */}
          <div className="flex-1 flex min-h-0 flex-col gap-[8px]">
            {/* Bloc Formations */}
            <div className="flex-1 basis-0 flex flex-col p-4 rounded-md border border-solid border-border gap-[4px]">
              <div className="flex items-center gap-[4px]">
                <GraduationCap className="text-foreground size-[22px]" />
                <h2 className="text-lg text-foreground font-semibold">
                  Mes Formations
                </h2>
              </div>
              {stud.map((item, idx) => (
                <Side key={item.title + idx} {...item} />
              ))}
            </div>

            {/* Bloc Profils */}
            <div className="flex-1 basis-0 flex flex-col p-4 rounded-md border border-solid border-border gap-[4px]">
              <div className="flex items-center gap-[4px]">
                <CircleUserRound className="text-foreground size-[22px]" />
                <h2 className="text-lg text-foreground font-semibold">
                  Mes Activités
                </h2>
              </div>

              {/* LinkedIn */}
              <div className="flex w-full items-center p-[8px] bg-accent/80 rounded-md">
                <div className="relative">
                  <Image
                    src="/img/icons/pp.png"
                    alt="Description"
                    width={40}
                    height={40}
                    className="rounded-4xl"
                  />
                  <Image
                    src="/img/icons/github.png"
                    alt="Description"
                    width={15}
                    height={15}
                    className="rounded-4xl absolute bottom-[0px] right-[0px]"
                  />
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/FlytziTv"
                  className="flex flex-row items-center justify-between w-full ml-[8px] mr-[8px]"
                >
                  <div className="flex flex-col">
                    <h6 className="text-sm font-bold text-foreground">
                      Flytzi
                    </h6>
                    <p className="text-xs font-medium text-foreground">
                      Mon profil Github
                    </p>
                  </div>
                  <ArrowUpRight className="size-[15px]" />
                </a>
              </div>

              {/* Discord */}
              <div className="flex w-full items-center p-[8px] bg-accent/80 rounded-md">
                <div className="relative">
                  <Image
                    src="/img/icons/pp.png"
                    alt="Description"
                    width={40}
                    height={40}
                    className="rounded-4xl"
                  />
                  <Image
                    src="/img/icons/discord.jpg"
                    alt="Description"
                    width={15}
                    height={15}
                    className="rounded-4xl absolute bottom-[0px] right-[0px]"
                  />
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.gg/Mft5EbRBEr"
                  className="flex flex-row items-center justify-between w-full ml-[8px] mr-[8px]"
                >
                  <div className="flex flex-col">
                    <h6 className="text-sm font-bold text-foreground">
                      Zenos Clans
                    </h6>
                    <p className="text-xs font-medium text-foreground">
                      Serveur Discord communautaire
                    </p>
                  </div>
                  <ArrowUpRight className="size-[15px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

const SIDE = [
  {
    Logo: (
      <Image
        src="/img/logo/new-mat.png"
        alt="Logo 1"
        width={40}
        height={40}
        className="rounded-md"
      />
    ),
    title: "New-mat Mechatronics",
    description: "Concepteur industriel",
    date: "nov. 2023 - déc. 2023 · 2 mois",
    category: "works",
  },
  {
    Logo: (
      <Image
        src="/img/logo/eiffage.png"
        alt="Logo 1"
        width={40}
        height={40}
        className="rounded-md"
      />
    ),
    title: "Eiffage",
    description: "Chargé d'études",
    date: "juin 2023 - juin 2023 · 1 mois",
    category: "works",
  },
  {
    Logo: (
      <Image
        src="/img/logo/eiffage.png"
        alt="Logo 1"
        width={40}
        height={40}
        className="rounded-md"
      />
    ),
    title: "Eiffage",
    description: "Chargé d'études",
    date: "mars 2023 - mars 2023 · 1 mois",
    category: "works",
  },
  {
    Logo: (
      <Image
        src="/img/logo/eiffage.png"
        alt="Logo 1"
        width={40}
        height={40}
        className="rounded-md"
      />
    ),
    title: "Eiffage",
    description: "Chargé d'études",
    date: "juin 2022 - juin 2022 · 1 mois",
    category: "works",
  },
  {
    Logo: (
      <Image
        src="/img/logo/eiffage.png"
        alt="Logo 1"
        width={40}
        height={40}
        className="rounded-md"
      />
    ),
    title: "Eiffage",
    description: "Chargé d'études",
    date: "mars 2022 - mars 2022 · 1 mois",
    category: "works",
  },

  {
    Logo: (
      <Image
        src="/img/logo/ynov.png"
        alt="Logo 1"
        width={40}
        height={40}
        className="rounded-md"
      />
    ),
    title: "New-mat Mechatronics",
    description: "Bts sio slam",
    date: "sept. 2025 - juin 2027 · 2 ans",
    category: "stud",
  },
  {
    Logo: (
      <Image
        src="/img/logo/simone-weil.png"
        alt="Logo 1"
        width={40}
        height={40}
      />
    ),
    title: "Simone Weil",
    description: "Bac Pro EDPI",
    date: "sept. 2021 - juin 2024 · 3 ans",
    category: "stud",
  },
];

const works = SIDE.filter((item) => item.category === "works");
const stud = SIDE.filter((item) => item.category === "stud");

type SideProps = {
  Logo: ReactNode;
  title: string;
  description: string;
  date: string;
};

const Side = (props: SideProps) => {
  return (
    <div className="flex w-full items-center p-[4px] hover:bg-accent/50 rounded-md transition-colors">
      {props.Logo}
      <div className="flex flex-row items-center justify-between w-full ml-[8px] mr-[8px]">
        <div>
          <h3 className="text-sm font-bold text-foreground">{props.title}</h3>
          <p className="text-xs font-medium text-foreground">
            {props.description}
          </p>
        </div>
        <p className="text-xs font-light text-muted-foreground">{props.date}</p>
      </div>
    </div>
  );
};
