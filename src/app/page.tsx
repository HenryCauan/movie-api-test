'use client'
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

interface Movie {
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
}

const Home = () => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const [query, setQuery] = useState('batman coringa');
  const [inputValue, setInputValue] = useState('');

  const fetchMovies = useCallback(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        console.log('Resultados encontrados:');
        data.results.forEach((movie: Movie) => {
          const name = document.getElementById('name');
          const pib = document.getElementById('pib');
          const post = document.getElementById('post') as HTMLImageElement;
          const sinopse = document.getElementById('sinopse');

          if (name) name.textContent = movie.title;
          if (pib) pib.textContent = String(movie.vote_average);
          if (post) post.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          if (sinopse) sinopse.textContent = movie.overview;
        });
      })
      .catch(error => console.error('Erro na requisição:', error));
  }, [apiKey, query]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleSearch = () => {
    setQuery(inputValue);
  };

  return (
    <>
      <div className="flex flex-col w-screen min-h-screen bg-gray-500">
        <header className="w-full items-center flex flex-col mt-12 gap-12">
          <h1 className="text-5xl font-bold">Encontre seu Filme</h1>
          <div className="flex gap-2">
            <input
              className="w-[30rem] h-[2.5rem] bg-white text-black placeholder:pl-4"
              type="text"
              placeholder="Escolha seu Filme"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="bg-white text-black px-8" onClick={handleSearch}>
              Send
            </button>
          </div>
        </header>
        <main className="w-full items-start flex flex-col mt-8 p-12">
          <div className="flex gap-12 mx-auto mt-2 flex-wrap items-start" id="content">
            <div className="w-[18rem] h-[40rem] mb-8" id="card">
              <h2 className="text-2xl" id="name"></h2> <p id="pib"></p>
              <Image
                src=""
                alt="post"
                className="w-full h-[400px]"
                id="post"
                width={500}
                height={400}
              />
              <p className="text-[1rem] w-full text-justify mt-2" id="sinopse"></p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;