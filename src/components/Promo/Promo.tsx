import photo from "../../images/photo.jpg";
import "./Promo.scss";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <h1 className="promo__title">Ну привет, сталкер!</h1>
        <p className="promo__subtitle">
          Меня зовут Александр, я <span>{`< frontend-разработчик / >`}</span>
        </p>
      </div>
      <img src={photo} alt="myPhoto" className="photo" />
    </section>
  );
}
