import { useContext } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { textVariant, fadeIn } from "../utils/motion";
import { LangContext } from "../context/LangContext";
import { styles } from "../styles";

const Projects = () => {
  const { dictionary } = useContext(LangContext);

  return (
    <motion.div
      className={`${styles.container} py-12`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div variants={textVariant()} className="text-center mb-8">
        <p className={`${styles.subTitle}`}>{dictionary.projects.subTitle}</p>
        <h2 className={`${styles.headTitle}`}>{dictionary.projects.title}</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {dictionary.projects.list.map(
          ({ name, description, tags, image, git_link, demo_link }, index) => (
            <motion.div
              variants={fadeIn(
                index % 2 === 0 ? "left" : "right",
                "spring",
                index * 0.5,
                1
              )}
              className={`drop-shadow-2xl md:p-5 md:pb-5 p-0 pb-10 w-full flex flex-col items-center gap-5 border-b ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="relative w-full h-[260px]">
                <img
                  src={image}
                  alt="project_image"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full">
                <div className="">
                  <h3 className="text-bgDark font-bold md:text-2xl text-xl">{name}</h3>
                  <p className="mt-2 text-bgDark text-sm">{description}</p>
                </div>

                <div className={`my-3 gap-5 ${git_link || demo_link ? 'flex' : 'hidden'}`}>
                  {git_link && (
                    <a
                      href={git_link}
                      target="_blank"
                      title="Github"
                      className="text-2xl flex justify-center items-center cursor-pointer hover:text-primary"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {demo_link && (
                    <a
                      href={demo_link}
                      target="_blank"
                      title="demo"
                      className="text-md flex justify-center items-center cursor-pointer px-3 border border-bgDark hover:text-primary hover:border-primary"
                    >
                      DEMO
                    </a>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <p
                      key={`${name}-${tag.name}`}
                      className={`text-[14px] ${tag.color} py-1 px-3 bg-secondary text-stone-50`}
                    >
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
