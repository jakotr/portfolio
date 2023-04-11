import { useContext } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//context
import { LangContext } from "../context/LangContext";
//utils
import { textVariant } from "../utils/motion";
//styles
import { styles } from "../styles";

const WorkExperience = () => {
  const {
    dictionary: { experience },
  } = useContext(LangContext);

  return (
    <>
      <div className={`${styles.container} bg-white-100 py-12`}>
        <motion.div variants={textVariant()} className="text-center mb-8">
          <p className={`${styles.subTitle}`}>{experience.subTitle}</p>
          <h2 className={`${styles.headTitle}`}>{experience.title}</h2>
        </motion.div>
        <VerticalTimeline lineColor="#71717a">
          {experience.companies.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.title}
              contentStyle={{
                background: "#d4d4d8",
                color: "#000",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #d4d4d8" }}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
            >
              <div>
                <h3 className="text-darkColor text-[24px] font-bold">
                  {experience.title}
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-darkColor text-[14px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkExperience;
