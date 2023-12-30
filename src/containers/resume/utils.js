import { MdWork, MdOutlineSubject } from "react-icons/md";
import { FaGraduationCap, FaIndustry } from "react-icons/fa";
import { GiPositionMarker, GiDuration } from "react-icons/gi";
import { FaLocationCrosshairs } from "react-icons/fa6";


 

export const data = {
    experience: [
        {
            titleIcon: <GiPositionMarker />,
            title: 'Guest Service Representative',
            locationIcon: <FaLocationCrosshairs />,
            subtitle: 'Toronto, Ontario, Canada',
            workIcon: <MdWork />,
            place: 'The SoHo Hotel and Residences',
            durationIcon: <GiDuration />,
            year: 'Oct 2022 - Present',
        },
        {
            titleIcon: <GiPositionMarker />,
            title: 'Front Desk Supervisor',
            locationIcon: <FaLocationCrosshairs />,
            subtitle: 'Hong Kong SAR',
            workIcon: <MdWork />,
            place: 'WM Hotel',
            durationIcon: <GiDuration />,
            year: 'Dec 2020 - Dec 2021',
        },
        {
            titleIcon: <GiPositionMarker />,
            title: 'Junior Front End Developer',
            locationIcon: <FaLocationCrosshairs />,
            subtitle: 'Hong Kong SAR',
            workIcon: <MdWork />,
            place: 'ThinkCol',
            durationIcon: <GiDuration />,
            year: 'Nov 2019 - Oct 2020',
        }
    ],
    education: [
        {
            subjectIcon: <MdOutlineSubject />,
            title: 'Diploma of Education, Software Engineering Technician',
            locationIcon: <FaLocationCrosshairs />,
            subtitle: 'Toronto, Ontario, Canada',
            gradIcon: <FaGraduationCap />,
            place: 'Centennial College',
            durationIcon: <GiDuration />,
            year: 'Sep 2022 - Dec 2023',
        },
        {
            subjectIcon: <MdOutlineSubject />,
            title: 'Higher diploma, Computing',
            locationIcon: <FaLocationCrosshairs />,
            subtitle: 'Hong Kong SAR',
            gradIcon: <FaGraduationCap />,
            place: 'Hong Kong Institute of Technology',
            durationIcon: <GiDuration />,
            year: 'Sep 2017 - Jul 2019',
        },
        {
            subjectIcon: <MdOutlineSubject />,
            title: "Bachelor's degree, Hospitality Administration/Management",
            locationIcon: <FaLocationCrosshairs />,
            subtitle: 'United Kingdom',
            gradIcon: <FaGraduationCap />,
            place: 'University of Sunderland',
            durationIcon: <GiDuration />,
            year: 'Sep 2012 - Jul 2015',
        }
    ],
}