export interface IProject {
  id: number;
  cover: string;
  title: string;
  shortDescription: string;
  projectPage: boolean;
  description: string;
  websiteUrl: string;
  githubUrl: string;
  githubIcon: string;
  skillIcons: ISkill[];
  imageList?: IImageItem[];
}

export interface ISkill {
  id: number;
  name: string;
  icon: string;
}

export interface IImageItem {
  imageId: number;
  imageName: string;
}
