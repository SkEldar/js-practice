import React from "react";
import photo1 from "./img/photo1.jpg";
import photo2 from "./img/photo2.jpg";
import photo3 from "./img/photo3.jpg";

function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <h2>Фото из моей будущей жизни</h2>
        <div className="photos">
          <img src={photo1} alt="photo1" />
          <img src={photo2} alt="photo2" />
          <img src={photo3} alt="photo3" />
        </div>
        <a href="#" class="btn">
          Стать верстальщиком
        </a>
      </div>
    </section>
  );
}

export default Gallery;
