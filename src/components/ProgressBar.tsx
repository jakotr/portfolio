import { motion, useScroll, useSpring } from "framer-motion"

const ProgressBar = () => {

  const {scrollYProgress} = useScroll()
  const scaleX = useSpring(scrollYProgress)

  return (
    <motion.div
      className="fixed w-full h-2 top-0 left-0 bg-primary origin-left"
      style={{scaleX}}
    ></motion.div>
  )
}

export default ProgressBar