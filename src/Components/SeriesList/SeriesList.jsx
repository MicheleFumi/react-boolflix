
import { useMovieContext } from '../../Context/MyContextData';
export default function Serieslist({ countryCode, ratingStars }) {
    const { series } = useMovieContext();


    return (
        <>
            {series.map(serie => (
                serie.poster_path ? (
                    <div key={serie.id} className="col-6 col-sm-4 col-md-3 col-lg-3 mb-4">
                        <div className="card">
                            <div className="movie-image-wrapper position-relative">
                                <img
                                    src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
                                    alt={serie.original_name}
                                    className="card-img-top movie-image"
                                />
                                <div className="movie-overlay position-absolute w-100 h-100 top-0 start-0 text-white d-flex flex-column justify-content-end p-3">
                                    <h5 className="card-title">{serie.original_name}</h5>
                                    <p>{countryCode(serie.original_language)}</p>
                                    <p>Voto: {ratingStars(serie.vote_average)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            ))}

        </>

    )
}