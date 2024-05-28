import {
  faChalkboardTeacher,
  faCalendarDay,
  faClipboard,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function getStaffNavItemGroups() {
  return [
   
    {
      id: "Staff-Profile",
      subheader: ``,
      children: [
        {
          id: "Staff-Dashboard",
          title: `Profile`,
          href: "/",
          icon: faChalkboardTeacher,
        },
        {
          id: "Calander-Event",
          title: `Calender And Event`,
          href: "/calender-event",
          icon: faCalendarDay,
        },
      ],
    },
    {
      id: "Internal-Exam",
      subheader: ``,
      children: [
        {
          id: "Internal-Exam",
          title: `Internal Exam`,
          href: "/internalExam",
          icon: faClipboard,
        }
      ]
    },
    {
      id: "Material-Upload",
      subheader: ``,
      children: [
        {
          title: `Material Upload`,
          href: "/materialUpload",
          icon: faFolderOpen,
        }
      ]
    },
  ];
}
