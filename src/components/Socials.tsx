import { FaGithub, FaLinkedin } from "react-icons/fa";

type SocialsProps = {
  styleClasses: string;
  color: 'light' | 'dark'
};

const Socials = ({ styleClasses, color }: SocialsProps) => {

  const className = `${color === 'light' ? 'hover:text-primary' : 'hover:text-primary'}`

  return (
    <div className={`${styleClasses}`}>
      <a className={className} href="https://github.com/jakotr" title="github" target="_blank">
        <FaGithub />
      </a>
      <a className={className} href="https://www.linkedin.com/in/jakub-otreba" title="LinkedIn" target="_blank">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Socials;
