import React from "react";
import contentBreadImage from "../../image/production1.jpg";
import item from "./production.module.css";


const Production = () => {
  return (
    <div className={item.content}>
      <div className={item.contentProduction}>
        <h2>Производство</h2>
        <div className={item.contentProductionText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          praesentium dolor illum animi obcaecati ut laudantium quos omnis atque
          repellat voluptates ducimus sit inventore iure, in nulla voluptate. Et
          dignissimos architecto laborum at harum exercitationem dolorum
          voluptates, dolorem fugit quo necessitatibus vero sapiente quae in ea
          iure quibusdam? Hic itaque temporibus reiciendis alias enim ratione
          cupiditate debitis, voluptatem consequatur rerum distinctio doloribus
          sequi tenetur incidunt facilis quia molestiae cum praesentium
          repellendus, repellat natus recusandae voluptate? At optio quod sint
          rerum reiciendis nostrum nisi natus vero ad fuga voluptas recusandae
          aut facilis quaerat corporis, blanditiis omnis earum odit ullam
          officia consequuntur.
        </div>
      </div>
      <div className={item.contentBread}>
        <img
          className={item.contentImage}
          src={contentBreadImage}
          alt="Хлеб"
          width="250px"
          height="450px"
        />
        <img
          className={item.contentImage}
          src={contentBreadImage}
          alt="Хлеб"
          width="250px"
          height="450px"
        />
      </div>
    </div>
  );
};

export default Production;
