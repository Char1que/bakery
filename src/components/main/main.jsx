import React from "react";
import contentBread from "../../image/main1.jpg";
import contentBreadSpec from "../../image/main2.jpg";
import item from "./main.module.css";

const Main = () => {
  return (
    <div className={item.content}>
      <div className={item.contentHome}>
        <h2>Lorem ipsum dolor sit.</h2>
        <div className={item.contentHomeText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          praesentium dolor illum animi obcaecati ut laudantium quos omnis
          atque repellat voluptates ducimus sit inventore iure, in nulla
          voluptate. Et dignissimos architecto laborum at harum exercitationem
          dolorum voluptates, dolorem fugit quo necessitatibus vero sapiente
          quae in ea iure quibusdam? Hic itaque temporibus reiciendis alias
          enim ratione cupiditate debitis, voluptatem consequatur rerum
          distinctio doloribus sequi tenetur incidunt facilis quia molestiae
          cum praesentium repellendus, repellat natus recusandae voluptate? At
          optio quod sint rerum reiciendis nostrum nisi natus vero ad fuga
          voluptas recusandae aut facilis quaerat corporis, blanditiis omnis
          earum odit ullam officia consequuntur.
        </div>
      </div>
      <div className={item.contentMain}>
        <img
          className={item.contentMainImage}
          src={contentBread}
          alt="Хлеб"
          width="250px"
          height="450px"
        />
        <img
          className={item.contentMainImage}
          src={contentBreadSpec}
          alt="Хлеб"
          width="250px"
          height="450px"
        />
      </div>
    </div>
  );
};

export default Main;
