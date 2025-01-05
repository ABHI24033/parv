"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ClipboardType,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  NotebookTabs,
  NotebookTabsIcon,
  FileUser,
  BriefcaseBusinessIcon,
  HomeIcon,
  CarIcon,
  HandCoinsIcon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main.jsx"
import { NavProjects } from "@/components/nav-projects.jsx"
import { NavUser } from "@/components/nav-user"
// import { TeamSwitcher } from "@/components/team-switcher"
// import { FaUsersCog } from "@/components/react-icons/fa";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Loan Applications",
      url: "/dashboard",
      icon: ClipboardType,
      isActive: true,
      items: [
        {
          title: "Personal Loan",
          url: "/dashboard/forms/personal_loan",
          icon:FileUser,
          isActive: true,
        },
        {
          title: "Business Loan",
          url: "/dashboard/forms/business_loan",
          icon:BriefcaseBusinessIcon,
          isActive: false,
        },
        {
          title: "Home Loan",
          url: "/dashboard/forms/home_loan",
          icon:HomeIcon,
        },
        {
          title: "Vehicle Loan",
          url: "/dashboard/forms/vehicle_loan",
          icon:CarIcon,
        },
        {
          title: "Gold Loan",
          url: "/dashboard/forms/gold_loan",
          icon:HandCoinsIcon,
        },
      ]
    },

    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Blogs",
      url: "/admin/blogs",
      icon: Bot,
    },
    {
      title: "Testimonials",
      url: "/admin/testimonial",
      icon: NotebookTabsIcon,
    }
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <div className="w-full mx-auto gap-2 flex justify-center item-center">
          <img
            src="/logo/PAR2.png"
            alt="Logo"
            className="h-10 w-10 mx-auto"
          />
          <h2 className="text-[1.1rem] font-mono font-semibold leading-5">Parv Financial Service</h2>
        </div>

      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
