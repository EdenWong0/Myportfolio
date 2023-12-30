import { FaHtml5, FaCss3, FaPython, FaJava, FaReact, FaAngular, FaBootstrap, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiAdobephotoshop, SiCanva } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";




export const skillsData = [
    {
        label: "Languages",
        data: [
            {
                skillName: "HTML",
                percentage: "90",
                icon: <FaHtml5 />,
            },
            {
                skillName: "CSS",
                percentage: "90",
                icon: <FaCss3 />,
            },
            {
                skillName: "JavaScript",
                percentage: "80",
                icon: <IoLogoJavascript />
            },
            {
                skillName: "TypeScript",
                percentage: "80",
                icon: <SiTypescript />
            },
            {
                skillName: "Python",
                percentage: "90",
                icon: <FaPython />,
            },
            {
                skillName: "C#",
                percentage: "90",
            },
            {
                skillName: "Java",
                percentage: "90",
                icon:<FaJava />
            },
        ],
    },
    {
        label: "Frameworks",
        data: [
            {
                skillName: "React.js",
                percentage: "95",
                icon: <FaReact />,
            },
            {
                skillName: "Angular",
                percentage: "75",
                icon: <FaAngular />,
            },
            {
                skillName: "Next.js",
                percentage: "80",
                icon: <TbBrandNextjs />,
            },
            {
                skillName: "Tailwind CSS",
                percentage: "80",
                icon: <TbBrandTailwind />,
            },
            {
                skillName: "BootStrap 5",
                percentage: "80",
                icon: <FaBootstrap />,
            },
        ],
    },
    {
        label: "Design Tools",
        data: [
            {
                skillName: "Adobe Photoshop",
                percentage: "85",
                icon: <SiAdobephotoshop />,
            },
            {
                skillName: "Figma",
                percentage: "80",
                icon: <FaFigma />,
            },
            {
                skillName: "Canva",
                percentage: "75",
                icon: <SiCanva />,
            },
        ],
    },
]