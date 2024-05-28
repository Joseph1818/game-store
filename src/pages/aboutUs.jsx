import React from "react";
import "./AboutUs.scss";
import Navbar from "../components/navbar";
import DanImg from "./images/Dan_pic.jpg";

const About = () => {
  return (
    <div className="main__aboutUs">
      <Navbar />
      <div className="wrapper__aboutUs">
        <div className="aboutUs__img">
          <img src={DanImg} alt="" />
          <h4 className="aboutUs__img__h4">Dan Umba - CEO</h4>
        </div>
        <div className="aboutUs__Text">
          <h1 className="Text__h1">Notre Mission</h1>
          <p className="">
            Bienvenue chez Console Kingdom! Nous sommes passionnés par tout ce
            qui touche aux jeux vidéo, aux enceintes et aux accessoires
            électroniques. Notre vision est de créer un royaume où chaque
            passionné de technologie trouve son bonheur, qu'il soit joueur,
            audiophile ou amateur de gadgets innovants. Nous proposons également
            une sélection soignée de haut-parleurs et d'accessoires
            électroniques pour améliorer votre expérience multimédia.
          </p>
          <p>
            {" "}
            Chez Console Kingdom, nous croyons que les jeux vidéo sont plus
            qu'un simple divertissement – ils sont une forme d'art, une manière
            de se connecter avec les autres et une source d'inspiration. Nous
            nous engageons à offrir une vaste gamme de jeux, de consoles et
            d'accessoires pour satisfaire les besoins de tous les joueurs, des
            débutants aux experts. Mais notre royaume ne s'arrête pas aux jeux
            vidéo.
            <p>
              Que vous cherchiez des enceintes pour sublimer votre son ou des
              gadgets high-tech pour simplifier votre quotidien, Console Kingdom
              est là pour vous offrir les meilleures solutions. Notre mission
              est simple : fournir des produits de haute qualité, un service
              client exceptionnel et une expérience d'achat unique. Nous voulons
              que chaque visite chez Console Kingdom soit une aventure
              passionnante où vous découvrez de nouvelles possibilités et
              trouvez exactement ce que vous cherchez.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
