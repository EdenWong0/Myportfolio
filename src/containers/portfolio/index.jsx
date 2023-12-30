import React, { useState }from 'react';
import { GrProjects } from "react-icons/gr";
import HeaderContent from '../../components/headerContent';
import ImageOne from '../../assist/project/calliewong.png';
import ImageTwo from '../../assist/project/weather.png';
import ImageThree from '../../assist/project/wimtach.png';
import ImageFour from '../../assist/project/spider.png';
import ImageFive from '../../assist/project/hkcahomes.png';
import './portfolio.scss';


const projectData =[
  {
    id: 2,
    name: "Callie Wong Music Academy",
    tool: "React.js | TailwindCSS",
    discription: "Crafted React and Tailwind, boosting the teacher network reach by 40%.",
    image: ImageOne,
    link: 'https://github.com/EdenWong0/React-Ms-Callie-Academy'
  },
  {
    id: 3,
    name: "Simple Weather Appliaction",
    tool: "React.js | TailwindCSS",
    discription: "Crafted React and Tailwind, boosting the teacher network reach by 40%.",
    image: ImageTwo,
    link: 'https://github.com/EdenWong0/WeatherApp'
  },
  {
    id: 4,
    name: "SFN Online Service / Workbench",
    tool: "React.js | TailwindCSS",
    discription: "Crafted React and Tailwind, boosting the teacher network reach by 40%.",
    image: ImageThree,
    link: 'https://sfn-community.onrender.com/'
  },
  {
    id: 5,
    name: "Spider Web App",
    tool: "React.js | TailwindCSS",
    discription: "Crafted React and Tailwind, boosting the teacher network reach by 40%.",
    image: ImageFour,
    link: 'https://spiderwebdev.netlify.app/'
  },
  {
    id: 6,
    name: "HKCAHomes",
    tool: "React.js | TailwindCSS",
    discription: "Crafted React and Tailwind, boosting the teacher network reach by 40%.",
    image: ImageFive,
    link: 'https://github.com/EdenWong0/React-HKCAHomes'
  }
]

const Portfolio = () => {

  const [hoveredValue, setHoveredValue] = useState(null);

  function handleHover(index){
    setHoveredValue(index)
  }

  function handleButtonClick(link) {
    // Check if the link is available
    if (link) {
      window.location.href = link;
    }
  }

  console.log(hoveredValue);
  return (
    <section id='portfolio' className='portfolio'>
      <HeaderContent
        headerText = "Portfolio"
        icon={<GrProjects size={50}/>}
      />
      <div className='portfolio__content'>
        <div className='portfolio__content__cards'>
          {
            projectData.map((item,index) =>(
              <div className='portfolio__content__cards__item' key={`cardItem${item.id}`} 
              onMouseEnter={()=>handleHover(index)}
              onMouseLeave={()=>handleHover(null)}
              >
                  <div className='portfolio__content__cards__item__img-wrapper'>
                    <a>
                      <img alt='' src={item.image}/>
                    </a>
                  </div>
                  <div className='overlay'>
                  {
                    index === hoveredValue && (
                      <div>
                        <h3>{item.name}</h3>
                        <h4>{item.tool}</h4>
                        <p>{item.discription}</p>
                        <button onClick={() => handleButtonClick(item.link)}>Click Me</button>
                      </div>
                    )
                  }
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio