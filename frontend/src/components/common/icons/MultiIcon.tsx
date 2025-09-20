import React from "react";
import { FaGithub, FaGitlab, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiPypi } from "react-icons/si";
import { TbFileCv } from "react-icons/tb";

import { Icon } from "@/types";

interface Props {
  icon: Icon;
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
    case "pypi":
      return <SiPypi {...props} />;
  }
};
