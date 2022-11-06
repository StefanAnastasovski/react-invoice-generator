import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const menuItems = [
  // General
  {
    id: "t1",
    category: "General",
    title: "Overview",
    subtitles: [],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "t2",
    category: "General",
    title: "Finance",
    subtitles: [],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "t3",
    category: "General",
    title: "Analytics",
    subtitles: [],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  // Management
  {
    id: "t4",
    category: "Management",
    title: "Customers",
    subtitles: [
      {
        subtitleId: "t4s1",
        subtitle: "List",
        link: "/list",
      },
      {
        subtitleId: "t4s2",
        subtitle: "Details",
        link: "/details",
      },
    ],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "t5",
    category: "Management",
    title: "Products",
    subtitles: [
      {
        subtitleId: "t5s1",
        subtitle: "List",
        link: "/list",
      },
      {
        subtitleId: "t5s2",
        subtitle: "Create",
        link: "/create",
      },
    ],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "t6",
    category: "Management",
    title: "Orders",
    subtitles: [
      {
        subtitleId: "t6s1",
        subtitle: "List",
        link: "/list",
      },
      {
        subtitleId: "t6s2",
        subtitle: "Details",
        link: "/details",
      },
    ],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "t7",
    category: "Management",
    title: "Invoices",
    subtitles: [
      {
        subtitleId: "t7s1",
        subtitle: "List",
        link: "/list",
      },
      {
        subtitleId: "t7s2",
        subtitle: "Details",
        link: "/details",
      },
    ],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  // Platforms
  {
    id: "t8",
    category: "Platforms",
    title: "Job Listings",
    subtitles: [],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "t9",
    category: "Platforms",
    title: "Social Media",
    subtitles: [],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "t10",
    category: "Platforms",
    title: "Blog",
    subtitles: [],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  // Apps
  {
    id: "t11",
    category: "Kanban",
    title: "Kanban",
    subtitles: [],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "t12",
    category: "Platforms",
    title: "Mail",
    subtitles: [],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "t13",
    category: "Platforms",
    title: "Calendar",
    subtitles: [],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
];
