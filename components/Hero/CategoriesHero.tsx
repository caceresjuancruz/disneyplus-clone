"use client";
import CategoryHero from "./CategoryHero";

function CategoriesHero() {
  const categories = ["disney", "pixar", "marvel", "starwars", "natgeo"];

  return (
    <div className="flex flex-row justify-center gap-1">
      {categories.map((category) => (
        <CategoryHero key={category} category={category} />
      ))}
    </div>
  );
}

export default CategoriesHero;
