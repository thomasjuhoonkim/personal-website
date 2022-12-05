import { faLeaf, faBolt, faStar } from "@fortawesome/free-solid-svg-icons";
// import uoft from "../../assets/company-logos/uoft.png";
// import grobo from "../../assets/company-logos/grobo.png";
// import enpowered from "../../assets/company-logos/enpowered.png";
// import fourStar from "../../assets/company-logos/four-star.png";

const Experiences = [
  {
    icon: faStar,
    // icon: fourStar,
    iconType: "fa",
    // iconStyle: {},
    title: "Software Developer",
    company: "Four Star",
    companyColor: "#ec3e3d",
    // companyColor: "#000",
    location: "Kitchener, Ontario",
    timeRange: "Mar. 2022 - Present",
    responsibilities: [
      "Developed python scripts that automated repetitive excel based tasks such as parsing, formatting, and delivery route optimization",
      "Designed RESTful backend server enabling excel files to be parsed and returned as a formatted file",
      "Incorporated a MySQL database that updates customer information when requested using the most recent excel file",
      "Developed a frontend using Next.js so that stakeholders can utilize automation scripts through a user interface.",
    ],
    skills:
      "React, Flask, Heroku, Python, Selenium, Google Maps API, Openpyxl, Excel",
    link: "/",
  },
  {
    icon: faBolt,
    // icon: enpowered,
    // iconType: "custom",
    iconType: "fa",
    // iconStyle: { transform: "scale(2.25)" },
    title: "Data Analyst",
    company: "EnPowered",
    companyColor: "#f6cb2a",
    // companyColor: "#fff",
    location: "Toronto, Ontario",
    timeRange: "May. 2022 - Aug. 2022",
    responsibilities: [
      "Utilized Python and C++ scripts to brute force and simulate fixed utility costs and prorated bill configurations, saving decryption efforts significantly.",
      "Transcribed and summarized convoluted utility tariff and rate documents for New York in Notion on company wiki.",
      "Developed an excel based calculator for utility supply charges for all seven transmission owners in New York which will be vital for market entry",
    ],
    skills:
      "Python, Reverse Engineering, Excel, Data Analysis, Energy Industry",
    link: "http://www.enpowered.com",
  },
  {
    icon: faLeaf,
    // icon: grobo,
    iconType: "fa",
    // iconType: "custom",
    // iconStyle: { marginLeft: 2, marginBottom: 2 },
    title: "Mechanical Design Engineer",
    company: "Grobo",
    companyColor: "#a3cf5f",
    // companyColor: "#fff",
    location: "Waterloo, Ontario",
    timeRange: "Sep. 2021 - Dec. 2021",
    responsibilities: [
      "Developed software solutions and scripts to procure and process data as well as increase operating efficiency in web traffic and supply chain.",
      "Designed two products incorporating plastic injection molding design, efficient manufacturing techniques, and integration of electromechanical components such as touch screen LCD's, mechanical pumps, and PCBs.",
    ],
    skills:
      "Python, Selenium, Industrial Design, Injection Molding, SOLIDWORKS",
    link: "https://twitter.com/grobogrow",
  },
  // {
  //   // icon: faLeaf,
  //   icon: uoft,
  //   iconType: "custom",
  //   iconStyle: { transform: "scale(2.5)" },
  //   title: "Solid Rocket Designer",
  //   company: "University of Toronto",
  //   // companyColor: "#a3cf5f",
  //   companyColor: "#fff",
  //   location: "Waterloo, Ontario",
  //   timeRange: "June. 2019 - Aug. 2020",
  //   responsibilities: [
  //     "Designed an affordable certification rocket with team members using OpenRocket, AutoCAD and SOLIDWORKS to make rocket handling certifications more affordable to team members.",
  //     "Worked remotely with team members during the sourcing and fabrication process of a certification rocket, ultimately producing and launching a testable prototype.",
  //   ],
  //   skills:
  //     "Rocket Design, Composites Manufacturing, AutoCAD, SOLIDWORKS, OpenRocket",
  //   link: "https://twitter.com/grobogrow",
  // },
];

export default Experiences;
