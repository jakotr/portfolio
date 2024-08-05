import { FaGithub, FaLinkedin } from "react-icons/fa";

type SocialsProps = {
  styleClasses: string;
};

export const Socials = ({ styleClasses }: SocialsProps) => {
  return (
    <div className={`${styleClasses}`}>
      <a
        className="hover:text-secondary"
        href="https://github.com/jakotr"
        title="github"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        className="hover:text-secondary"
        href="https://www.linkedin.com/in/jakub-otreba"
        title="LinkedIn"
        target="_blank"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};
