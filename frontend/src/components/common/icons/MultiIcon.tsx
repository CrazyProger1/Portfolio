import React from "react";
import { FaGithub, FaGitlab, FaLinkedin, FaTelegram } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

interface Props {
  icon: "github" | "cv" | "gitlab" | "telegram" | "linkedin";
  className?: string;
  size?: string | number;
  color?: string;
  title?: string;
}

export const MultiIcon = ({ icon, ...props }: Props) => {
  switch (icon) {
    case "github":
      return <FaGithub {...props} />;
    case "cv":
      return <TbFileCv {...props} />;
    case "gitlab":
      return <FaGitlab {...props} />;
    case "telegram":
      return <FaTelegram {...props} />;
    case "linkedin":
      return <FaLinkedin {...props} />;
  }
};
