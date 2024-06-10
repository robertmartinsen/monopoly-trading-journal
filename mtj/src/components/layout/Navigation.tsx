import { ElementType } from "react";

import {
  BookOpenIcon,
  PresentationChartLineIcon,
  NewspaperIcon,
  CalendarDaysIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { buttonStyles } from "@/components/Button";
import { twMerge } from "tailwind-merge";

export function Nav() {
  return (
    <>
      <aside className="scrollbar-hidden lg:flex sticky flex h-screen flex-col overflow-y-auto bg-white pl-2 pr-4 pt-5 xs:hidden sm:hidden md:hidden">
        <LargeNavItem Icon={ComputerDesktopIcon} title="Dashboard" url="/" />
        <LargeNavItem Icon={BookOpenIcon} title="Journal" url="/journal" />
        <LargeNavItem
          Icon={PresentationChartLineIcon}
          title="Market"
          url="/market"
        />
        <LargeNavItem Icon={NewspaperIcon} title="News" url="/news" />
        <LargeNavItem
          Icon={CalendarDaysIcon}
          title="Calendar"
          url="/calendar"
        />
      </aside>
      <aside className="scrollbar-hidden lg:hidden sticky flex h-screen flex-col bg-white pl-2 pr-4 pt-5 xs:hidden sm:hidden md:flex">
        <MediumNavItem Icon={ComputerDesktopIcon} title="Dashboard" url="/" />
        <MediumNavItem Icon={BookOpenIcon} title="Journal" url="/journal" />
        <MediumNavItem
          Icon={PresentationChartLineIcon}
          title="Market"
          url="/market"
        />
        <MediumNavItem Icon={NewspaperIcon} title="News" url="/news" />
        <MediumNavItem
          Icon={CalendarDaysIcon}
          title="Calendar"
          url="/calendar"
        />
      </aside>
      <aside className="scrollbar-hidden lg:hidden fixed bottom-0 flex w-full bg-white pl-2 pr-4 pt-5 xs:flex sm:flex md:hidden">
        <SmallNavItem Icon={BookOpenIcon} title="Journal" url="/journal" />
        <SmallNavItem
          Icon={PresentationChartLineIcon}
          title="Market"
          url="/market"
        />
        <SmallNavItem Icon={NewspaperIcon} title="News" url="/news" />
        <SmallNavItem
          Icon={CalendarDaysIcon}
          title="Calendar"
          url="/calendar"
        />
      </aside>
    </>
  );
}

type NavItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
  className?: string;
};

function LargeNavItem({ Icon, title, url, className }: NavItemProps) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        twMerge(
          "mb-4 flex gap-3 px-1 py-4 pb-3 text-black",
          buttonStyles({ variant: "ghost" }),
          isActive ? "bg-gray-300" : undefined,
          className,
        )
      }
    >
      <Icon className="h-6 w-6" />
      <div className="text-lg">{title}</div>
    </NavLink>
  );
}

function MediumNavItem({ Icon, title, url, className }: NavItemProps) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        twMerge(
          buttonStyles({ variant: "ghost" }),
          "ml-1 flex w-full flex-col items-center gap-1 rounded-lg pt-3 text-black",
          isActive ? "bg-gray-300" : undefined,
          className,
        )
      }
    >
      <Icon className="h-6 w-6" />
      <div className="text-md overflow-hidden text-ellipsis whitespace-nowrap">
        {title}
      </div>
    </NavLink>
  );
}

function SmallNavItem({ Icon, title, url, className }: NavItemProps) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        twMerge(
          buttonStyles({ variant: "ghost" }),
          "ml-1 flex w-full flex-col items-center gap-1 rounded-lg pt-3 text-black",
          isActive ? "bg-gray-300" : undefined,
          className,
        )
      }
    >
      <Icon className="h-6 w-6" />
      <div className="text-md overflow-hidden text-ellipsis whitespace-nowrap">
        {title}
      </div>
    </NavLink>
  );
}
