/*pegar

- originais
- recomendados(tranding)
- em alta(top rated)
- ação
- comedia
- terroe
- romance
- documentarios
*/

const basicFatch = async (endpoint) => {
  const req = await fetch(`${process.env.REACT_APP_API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflex",
        items: await basicFatch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
        ),
      },
      {
        slug: "tranding",
        title: "Recomendados para voce",
        items: await basicFatch(
          `/trending/all/week?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFatch(
          `/movie/top_rated?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFatch(
          `/discover/movie?whit_genres=28?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedia",
        items: await basicFatch(
          `/discover/movie?whit_genres=35?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFatch(
          `/discover/movie?whit_genres=27?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFatch(
          `/discover/movie?whit_genres=10749?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentario",
        items: await basicFatch(
          `/discover/movie?whit_genres=99?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFatch(
            `/movie/${movieId}?languege=pt-BR&api_key=${REACT_APP_API_KEY}`
          );
          break;
        case "tv":
          info = await basicFatch(
            `/tv/${movieId}?languege=pt-BR&api_key=${REACT_APP_API_KEY}`
          );
          break;
      }
    }

    return info;
  },
};
