import { ElementType } from "react";

import {
  BookOpenIcon,
  PresentationChartLineIcon,
  NewspaperIcon,
  CalendarDaysIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { buttonStyles } from "@/components/Button";
import { twMerge } from "tailwind-merge";

export function Nav() {
  return (
    <>
      <aside className="scrollbar-hidden lg:flex fixed flex h-screen flex-col overflow-y-auto bg-white pl-2 pr-4 pt-5 xs:hidden sm:hidden md:hidden">
        <LargeNavItem Icon={ComputerDesktopIcon} title="Dashboard" url="/" />
        <LargeNavItem Icon={BookOpenIcon} title="Journal" url="/" />
        <LargeNavItem Icon={PresentationChartLineIcon} title="Market" url="/" />
        <LargeNavItem Icon={NewspaperIcon} title="News" url="/" />
        <LargeNavItem Icon={CalendarDaysIcon} title="Calendar" url="/" />
      </aside>
      <aside className="scrollbar-hidden lg:hidden fixed h-screen flex flex-col bg-white pl-2 pr-4 pt-5 xs:hidden sm:hidden md:flex">
        <MediumNavItem Icon={ComputerDesktopIcon} title="Dashboard" url="/" />
        <MediumNavItem Icon={BookOpenIcon} title="Journal" url="/" />
        <MediumNavItem
          Icon={PresentationChartLineIcon}
          title="Market"
          url="/"
        />
        <MediumNavItem Icon={NewspaperIcon} title="News" url="/" />
        <MediumNavItem Icon={CalendarDaysIcon} title="Calendar" url="/" />
      </aside>
      <aside className="scrollbar-hidden lg:hidden fixed bottom-0 flex w-full bg-white pl-2 pr-4 pt-5 xs:flex sm:flex md:hidden">
        <SmallNavItem Icon={BookOpenIcon} title="Journal" url="/" />
        <SmallNavItem Icon={PresentationChartLineIcon} title="Market" url="/" />
        <SmallNavItem Icon={NewspaperIcon} title="News" url="/" />
        <SmallNavItem Icon={CalendarDaysIcon} title="Calendar" url="/" />
      </aside>
    </>
  );
}

type LargeNavItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function LargeNavItem({ Icon, title, url }: LargeNavItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        "mb-4 flex gap-3 px-1 py-4 pb-3 text-black",
        buttonStyles({ variant: "ghost" }),
      )}
    >
      <Icon className="h-6 w-6" />
      <div className="text-lg">{title}</div>
    </a>
  );
}

type MediumNavItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
  isActive?: boolean;
};

function MediumNavItem({ Icon, title, url }: MediumNavItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `ml-1 flex w-full flex-col items-center gap-1 rounded-lg pt-3 text-black`,
      )}
    >
      <Icon className="h-6 w-6" />
      <div className="text-md overflow-hidden text-ellipsis whitespace-nowrap">
        {title}
      </div>
    </a>
  );
}

type SmallNavItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
  isActive?: boolean;
};

function SmallNavItem({ Icon, title, url }: SmallNavItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `ml-1 flex w-full flex-col items-center gap-1 rounded-lg pt-3 text-black`,
      )}
    >
      <Icon className="h-6 w-6" />
      <div className="text-md overflow-hidden text-ellipsis whitespace-nowrap">
        {title}
      </div>
    </a>
  );
}
