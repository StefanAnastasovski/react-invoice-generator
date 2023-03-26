import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const generalMenuItems = [
  {
    id: "gmi1",
    category: "General",
    title: "Overview",
    subtitles: [],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "gmi2",
    category: "General",
    title: "Finance",
    subtitles: [],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "gmi3",
    category: "General",
    title: "Analytics",
    subtitles: [],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
];

const managementMenuItems = [
  {
    id: "mmi1",
    category: "Management",
    title: "Customers",
    subtitles: [
      {
        subtitleId: "mmi1s1",
        subtitle: "List",
        link: "/customers",
      },
      {
        subtitleId: "mmi1s2",
        subtitle: "Create",
        link: "/customers/new",
      },
      {
        subtitleId: "mmi1s3",
        subtitle: "Details",
        link: "/details",
      },
    ],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: "mmi2",
    category: "Management",
    title: "Services",
    subtitles: [
      {
        subtitleId: "mmi2s1",
        subtitle: "List",
        link: "/services",
      },
      {
        subtitleId: "mmi2s2",
        subtitle: "Create",
        link: "/services/new",
      },
    ],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
  // {
  //   id: "mmi3",
  //   category: "Management",
  //   title: "Orders",
  //   subtitles: [
  //     {
  //       subtitleId: "mmi3s1",
  //       subtitle: "List",
  //       link: "/list",
  //     },
  //     {
  //       subtitleId: "mmi3s2",
  //       subtitle: "Details",
  //       link: "/details",
  //     },
  //   ],
  //   link: "/",
  //   icon: <HomeOutlinedIcon />,
  // },
  {
    id: "mmi4",
    category: "Management",
    title: "Invoices",
    subtitles: [
      {
        subtitleId: "mmi4s1",
        subtitle: "List",
        link: "/invoices",
      },
      {
        subtitleId: "mmi4s2",
        subtitle: "Create",
        link: "/invoices/settings/details",
      },
      {
        subtitleId: "mmi4s3",
        subtitle: "Details",
        link: "/invoices/details",
      },
    ],
    link: "/",
    icon: <HomeOutlinedIcon />,
  },
];

// const platformMenuItems = [
//   {
//     id: "pmi1",
//     category: "Platforms",
//     title: "Job Listings",
//     subtitles: [],
//     link: "/",
//     icon: <HomeOutlinedIcon />,
//   },
//   {
//     id: "pmi2",
//     category: "Platforms",
//     title: "Social Media",
//     subtitles: [],
//     link: "/",
//     icon: <HomeOutlinedIcon />,
//   },
//   {
//     id: "pmi3",
//     category: "Platforms",
//     title: "Blog",
//     subtitles: [],
//     link: "/",
//     icon: <HomeOutlinedIcon />,
//   },
// ];

// const appMenuItems = [
//   {
//     id: "ami1",
//     category: "Platforms",
//     title: "Kanban",
//     subtitles: [],
//     link: "/",
//     icon: <HomeOutlinedIcon />,
//   },
//   {
//     id: "ami2",
//     category: "Platforms",
//     title: "Mail",
//     subtitles: [],
//     link: "/",
//     icon: <HomeOutlinedIcon />,
//   },
//   {
//     id: "ami3",
//     category: "Platforms",
//     title: "Calendar",
//     subtitles: [],
//     link: "/",
//     icon: <HomeOutlinedIcon />,
//   },
// ];

export const menuItems = [
  // General
  {
    id: "cat1",
    title: "General",
    items: generalMenuItems,
  },
  // Management
  {
    id: "cat2",
    title: "Management",
    items: managementMenuItems,
  },
  // Platforms
  {
    id: "cat3",
    title: "Platforms",
    // items: platformMenuItems,
    items: [],
  },
  // Apps
  // {
  //   id: "cat4",
  //   title: "Apps",
  //   // items: appMenuItems,
  //   items: [],
  // },
];
