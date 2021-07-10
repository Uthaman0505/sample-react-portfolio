import React, { useState } from "react";
import Categories from "../components/Categories";
import MenuItem from "../components/MenuItem";
import Title from "../components/Title";
import portfolios from "../components/AllPortfolios";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];

function PortfolioPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="portfolio-page">
      <div className="portfolio-title">
        <Title title={"Portfolios"} span={"Portfolios"} />
      </div>
      <div className="portfolio-container">
        <Categories filterItem={filterItem} categories={categories} />
        <MenuItem menuItem={menuItems} />
      </div>
    </div>
  );
}

export default PortfolioPage;
