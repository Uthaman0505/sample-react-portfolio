import React from "react";
import { NavLink } from "react-router-dom";

function Categories({ filterItem, categories }) {
  return (
    <div className="portfolio-categories">
      {categories.map((category, i) => {
       return <button type="button" className="btn-portfolio" onClick={() => filterItem(category)} key={i}>
          {category}
        </button>;
      })}
    </div>
  );
}

export default Categories;
