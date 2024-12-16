import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import { skills, experiences } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm 
        <span className="blue-gradient_text font-semibold drop-shadow p-2">
          Dmitrii
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
        Web3 and Blockchain developer from Israel.
        <br/> 
        Specializing in creating web3 crypto currency applications
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skills) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />

              <div className="btn-front rounded-xl flex justify-center items-center">
                <img className="w-1/2 h-1/2 object-contain"
                  src={skills.imageUrl}
                  alt={skills.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <p>
          I've worked with all sorts of companies, leveling up my skills
          and teaming up smart people.
          rundown:
        </p>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img className="w-[60] h-[60] object-contain"
                    src={experience.icon} 
                    alt={experience.company_name}
                  />
                </div>
              }
              iconStyle={{background: experience.iconBg}}
              contentStyle ={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColloe: experience.iconBg,
                boxShadow: 'none'
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>

                <p className="text-black-500 font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li key={`experience-point-${index}`} className="text-black-500/50 font-normal p-1 text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  )
}

export default About;