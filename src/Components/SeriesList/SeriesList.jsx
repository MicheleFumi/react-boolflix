import Flag from 'react-country-flag';
import { useMovieContext } from '../../Context/MyContextData';
export default function Serieslist() {
    const { series } = useMovieContext();
    function serieCountryCode(serie) {
        let countryCode = serie.original_language.toUpperCase();
        if (countryCode === 'EN') countryCode = 'US';
        else if (countryCode === 'ZH') countryCode = 'CN';
        else if (countryCode === 'JA') countryCode = 'JP';
        else if (countryCode === 'KO') countryCode = 'KR';

        return (
            <Flag countryCode={countryCode} style={{ width: 30, height: 30 }} />
        )

    }

    const ratingStars = (serie) => {
        const rating = Math.ceil(serie.vote_average / 2);
        let stars = [];
        for (let i = 1; i <= 6; i++) {
            if (i <= rating) {
                stars.push(<i key={i} className="bi bi-star-fill"></i>);
            } else {
                stars.push(<i key={i} className="bi bi-star"></i>);
            }
        }
        return stars;
    };
    return (
        <>
            {series.map(serie => (
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
                                <p>{serieCountryCode(serie)}</p>
                                <p>Voto: {ratingStars(serie)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>

    )
}