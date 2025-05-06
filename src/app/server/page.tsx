'use client'
import { useEffect } from "react";

interface Movie {
    title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
}

const Server = () => {
    const apiKey = 'a86f52caaf8faecdb26d7f437edd4301';
    const query = 'batman';
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                console.log('Resultados encontrados:');
                data.results.forEach((movie: Movie) => {
                    console.log('Título:', movie.title);
                    console.log('Sinopse:', movie.overview);
                    console.log('Nota média:', movie.vote_average);
                    console.log('Poster:', `https://image.tmdb.org/t/p/w500${movie.poster_path}`);
                    console.log('----------------------------');
                });
            })
            .catch(error => console.error('Erro na requisição:', error));
    }, [])
    return (
        <>
        
        </>
    )
}

export default Server;