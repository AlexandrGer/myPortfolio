import { ISkill } from "../../types/IProject";
import "./Skills.scss";

type Props = {
  item: {
    id: number;
    title: string;
    skillAray: ISkill[];
  };
};

export default function Skills({ item }: Props) {
  return (
    <div>
      <h3 className="skill__title">
        const <span>{item.title}</span> =
      </h3>
      <ul className="skill__items">
        {item.skillAray.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <img src={item.icon} alt={item.name} className="skills__icon" />
          </li>
        ))}
      </ul>
    </div>
  );
}
