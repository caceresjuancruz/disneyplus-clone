"use client";
import Image from "next/image";

interface CategoryHeroProps {
  category: string;
}

const CategoryHero: React.FC<CategoryHeroProps> = ({ category }) => {
  return (
    <article
      className={`relative transition-all duration-300 w-40 h-full opacity-50 shadow-2xl shadow-inner z-0`}
      onClick={() => console.log(category)}
    >
      <Image
        className="absolute object-cover w-full h-full rounded-sm"
        src={`/images/categories/${category}/${category}-background.jpg`}
        alt=""
        fill
        sizes="100%"
      />

      <Image
        className="absolute filter invert bottom-0 left-0 right-0 mx-auto w-30 p-5 ease-in-out duration-300 z-10"
        src={`/images/categories/${category}/${category}-logo.png`}
        alt={category}
        width={2000}
        height={2000}
      />

      <style jsx>{`
        article {
          box-shadow: 1px -1px 400px 200px rgba(0, 0, 0, 1);
          -webkit-box-shadow: 1px -1px 400px 200px rgba(0, 0, 0, 1);
          -moz-box-shadow: 1px -1px 400px 200px rgba(0, 0, 0, 1);
        }

        article:hover {
          opacity: 100;
          cursor: pointer;
        }

        article::after {
          content: "";
          position: absolute;
          bottom: 0;
          height: 100%;
          width: 100%;
          background-image: linear-gradient(
            to bottom,
            transparent 10%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0) 95%
          );
          opacity: 1;
        }
      `}</style>
    </article>
  );
};

export default CategoryHero;
