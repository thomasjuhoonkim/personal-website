import { faLeaf, faBolt, faStar } from "@fortawesome/free-solid-svg-icons";

const Experiences = [
  {
    icon: faStar,
    title: "Software Developer @ Four Star",
    location: "Kitchener, Ontario",
    timeRange: "Mar. 2022 - Present",
    responsibilities: [
      "Developed python scripts that automate repetitive excel based tasks such as sheet parsing duplicatematching, formatting, and delivery route optimization.",
      "Reduced excel based task times by 90%, allowing company stakeholders to focus on priority business operations.",
      "Built the front and backend for an internal web-based tool using React and Flask that allows stakeholders to utilize the python automation scripts.",
    ],
    skills:
      "React, Flask, Heroku, Python, Selenium, Google Maps API, Openpyxl, Excel",
    link: "/",
  },
  {
    icon: faBolt,
    title: "Data Analyst @ EnPowered",
    location: "Toronto, Ontario",
    timeRange: "May. 2022 - Aug. 2022",
    responsibilities: [
      "Utilized Python and C++ scripts to brute force and simulate fixed utility costs and prorated bill configurations, saving decryption efforts significantly.",
      "Transcribed and summarized convoluted utility tariff and rate documents for New York in Notion.",
      "Decrypted final utility bill costs to customers, utilizing billed energy usage, line items, and adjustment rates, etc. in Ontario, New York, and Ohio.",
    ],
    skills:
      "Python, Reverse Engineering, Excel, Data Analysis, Energy Industry",
    link: "http://www.enpowered.com",
  },
  {
    icon: faLeaf,
    title: "Mechanical Design Engineer @ Grobo",
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
];

export default Experiences;
