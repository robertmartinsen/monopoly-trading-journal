import { useState } from "react";

import {
  Bars3Icon,
  XMarkIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  NewspaperIcon,
  CalendarDaysIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import Logo from "@/assets/logo.svg"

export function Header () {
return (
    <div className="flex gap-10 lg:gap-20 justify-between">
        <div className="flex items-center flex-shrink-0">
            <a href="/">
                <img src={Logo} />
            </a>
        </div>
    </div>
)
}