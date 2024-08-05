import { useContext } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

//context
import { LangContext } from "../context";
//utils
import { textVariant, fadeIn } from "../utils";
//styles
import { styles } from "../styles";

export const Projects = () => {
  const {
    dictionary: { projects },
  } = useContext(LangContext);

  return (
    <motion.div
      className={`${styles.container} py-12`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div variants={textVariant()} className="text-center mb-8">
        <p className={`${styles.subTitle}`}>{projects.subTitle}</p>
        <h2 className={`${styles.headTitle}`}>{projects.title}</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {projects.list.map(
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
              key={`project-${name}`}
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
                  <h3 className="text-darkColor font-bold md:text-2xl text-xl">
                    {name}
                  </h3>
                  <p className="mt-2 text-darkColor text-sm">{description}</p>
                </div>

                <div
                  className={`my-3 gap-5 ${
                    git_link || demo_link ? "flex" : "hidden"
                  }`}
                >
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
                      className="text-md flex justify-center items-center cursor-pointer px-3 border border-darkColor hover:text-primary hover:border-primary"
                    >
                      DEMO
                    </a>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <p
                      key={`${name}-${tag.name}`}
                      className={`text-[14px] py-1 px-3 bg-secondary text-lightColor`}
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

