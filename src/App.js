import React, { useEffect, useState } from "react";
import "./App.css";
import FeaturedMovie from "./componentes/Featured";
import Header from "./componentes/Header";
import MovieRow from "./componentes/MovieRow";
import Tmdb from "./Tmdb";

const header = () => {
  const [movieList, setMovieLiest] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const LoadAll = async () => {
      //pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieLiest(list);

      //PEGANDO O fEATURED
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    LoadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com{" "}
        <span role="img" aria-label="coração">
          ❤️
        </span>
        pela B7web <br />
        Direitos de imagem para Netflix
        <br />
        Dados pegos do site Themoviedb.org
      </footer>
    </div>
  );
};

export default header;
