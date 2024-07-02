import "./About.scss";

type Props = {
  aboutMe: string;
};

export default function About({ aboutMe }: Props) {
  const prepareToHtml = (text: string) => {
    return text.replaceAll("\r\n", "<br />&nbsp;");
  };

  return (
    <section className="about">
      <h2 className="about__title">
        const <span>{` aboutMe `}</span> =
      </h2>
      <p
        className="about__text"
        dangerouslySetInnerHTML={{
          __html: prepareToHtml(aboutMe),
        }}
      ></p>
    </section>
  );
}
