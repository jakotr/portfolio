import { useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";

//context
import { LangContext } from "../context/LangContext";
//utils
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
//styles
import { styles } from "../styles";

const Introduction = () => {
  //context
  const {
    dictionary: { intro, about },
  } = useContext(LangContext);

  //refs
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  //effects
  useEffect(() => {
    const svgNode = svgRef.current;
    const pathNode = pathRef.current;
    const containerNode = containerRef.current;
    let length = 0;

    if (pathNode instanceof SVGPathElement) {
      length = pathNode?.getTotalLength();
    }

    if (svgNode !== null) {
      svgNode.style.strokeDasharray = length.toString();
      svgNode.style.strokeDashoffset = length.toString();
    }

    const handleScroll = () => {
      //calculate scrollpercent
      if (containerNode !== null) {
        const scrollpercent =
          (document.body.scrollTop + document.documentElement.scrollTop) /
          // (document.documentElement.scrollHeight -
          (containerNode.scrollHeight - document.documentElement.clientHeight);
        const draw = length * scrollpercent;
      }

      if (svgNode !== null) {
        // give to the svg the offset value to start drawing that on scroll
        svgNode.style.strokeDashoffset = (length - draw).toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen bg-darkColor text-lightColor"
    >
      <div className={`${styles.container}`}>
        <motion.header
          className="w-fit flex flex-col pt-[200px] mx-auto"
          variants={textVariant(0.1, 1)}
          initial="hidden"
          whileInView="show"
        >
          <h1 className="xl:text-8xl sm:text-6xl text-4xl font-bold">
            {intro.name}
          </h1>
          <h2 className="xl:text-4xl sm:text-3xl text-xl">{intro.position}</h2>
          <span className="text-center text-grayText sm:text-sm text-xs block pt-[150px] pb-4 animate-pulse">
            Scroll down...
          </span>
        </motion.header>
        <div className="pt-[200px] relative">
          <motion.span
            className="lg:w-[2px] w-[1px] lg:-ml-[1px] ml-0 h-[200px] bg-lightColor block absolute top-0 left-1/2"
            variants={zoomIn(0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          ></motion.span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 2200"
            height="2200"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full"
            ref={svgRef}
          >
            <defs>
              <clipPath id="__lottie_element_103">
                <rect width="1200" height="2200" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_103)">
              <g
                transform="matrix(1,0,0,1,624.25,300.5)"
                opacity="1"
                // style="display: block;"
              >
                <g opacity="1" transform="matrix(1,0,0,1,-2,0)">
                  <path
                    ref={pathRef}
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(255,255,255)"
                    strokeOpacity="1"
                    strokeWidth="2"
                    d=" M-22,-302 C-22,-302 -22,-260 -22,-206 C-22,-152 -36.1870002746582,-25.43600082397461 -259.75,66 C-493.25,161.5 -524.25,370.5 -518.8610229492188,535.7869873046875 C-513.5590209960938,698.4140014648438 -439.625,891.3670043945312 -279.927001953125,1008.1010131835938 C-182.25,1079.5 -22.25,1155.5 95.63899993896484,1101.8370361328125 C151.2310028076172,1076.531005859375 157.04100036621094,1001.0560302734375 120.12000274658203,975.9550170898438 C83.99299621582031,951.3939819335938 28.160999298095703,954.6820068359375 -11.555000305175781,994 C-89.57099914550781,1071.2340087890625 -20.06100082397461,1195.5 -22.06100082397461,1593.177001953125 C-22.333999633789062,1647.4969482421875 -21.5,1840.9200439453125 -21.5,1901"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,600,1100)"
                opacity="1"
                // style="display: block;"
              ></g>
            </g>
          </svg>
          <motion.p
            className="absolute left-0 top-1/3 md:max-w-2xl max-w-xs bg-darkColor py-4 md:text-2xl text-sm "
            variants={fadeIn("left", "", 0.1, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {about}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
