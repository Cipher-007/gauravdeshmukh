export type Project = {
  title: string;
  description: string;
  tech: string[];
  links: {
    github: string;
    deploy: string;
  };
  image?: string;
};
