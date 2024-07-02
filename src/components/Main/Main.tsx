import About from "../AboutMe/About";
import Promo from "../Promo/Promo";
import Skills from "../Skills/Skills";
import { skills } from "../../utils/constans/skills";
import aboutMeText from "../../utils/constans/aboutMeText";
import "./Main.scss";

export default function Main() {
  return (
    <>
      <Promo />
      <div className="container">
        <About aboutMe={aboutMeText} />
        <section className="skills">
          {skills.map((item) => (
            <Skills item={item} key={item.id} />
          ))}
        </section>
      </div>
    </>
  );
}
