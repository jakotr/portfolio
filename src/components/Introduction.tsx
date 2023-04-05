import { useEffect, useRef } from "react";

import { header, about } from "../constants";

const Introduction = () => {
  //refs
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  //effects
  useEffect(() => {
    const svgNode = svgRef.current;
    const pathNode = pathRef.current;
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
      const scrollpercent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      const draw = length * scrollpercent;

      if (svgNode !== null) {
        // give to the svg the offset value to start drawing that on scroll
        svgNode.style.strokeDashoffset = (
          length -
          (draw + draw * 0.1 + document.documentElement.scrollTop * 0.1)
        ).toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full min-h-screen bg-bgDark text-stone-50">
      <div className="container max-w-7xl mx-auto">
        <header className="w-fit flex flex-col pt-[200px] mx-auto">
          <h1 className="xl:text-8xl sm:text-6xl text-4xl font-bold">
            {header.name}
          </h1>
          <h2 className="xl:text-4xl sm:text-3xl text-xl">{header.position}</h2>
          <span className="text-center text-grayText sm:text-sm text-xs block pt-[150px] pb-4 animate-pulse">
            Scroll down...
          </span>
        </header>
        <div className="pt-[200px] relative">
          <span className="lg:w-[2px] w-[1px] h-[200px] bg-stone-50 block mx-auto absolute top-0 left-1/2 -translate-x-1/2"></span>
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
          <div className="absolute left-0 top-1/3 md:max-w-2xl max-w-xs bg-bgDark py-4 md:text-2xl text-md">
            {about}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
