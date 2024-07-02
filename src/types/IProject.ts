export interface IProject {
  id: number;
  cover: string;
  title: string;
  description: string;
  websiteUrl: string;
  githubUrl: string;
  githubIcon: string;
  skillIcons: ISkill[];
}

export interface ISkill {
  id: number;
  name: string;
  icon: string;
}
