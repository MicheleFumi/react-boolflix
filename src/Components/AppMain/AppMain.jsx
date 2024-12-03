import MovieList from '../MovieList/MovieList';
import SeriesList from '../SeriesList/SeriesList';
import Flag from 'react-country-flag';
import './style.css'
export default function AppMain() {
    function countryCode(language) {
        let countryCode = language.toUpperCase();
        if (countryCode === 'EN') countryCode = 'US';
        else if (countryCode === 'ZH') countryCode = 'CN';
        else if (countryCode === 'JA') countryCode = 'JP';
        else if (countryCode === 'KO') countryCode = 'KR';

        return (
            <Flag countryCode={countryCode} className='flag' />
        )

    }

    const ratingStars = (voteAverage) => {
        const rating = Math.ceil(voteAverage / 2);
        let stars = [];
        for (let i = 1; i <= 6; i++) {
            if (i <= rating) {
                stars.push(<i key={i} className="bi bi-star-fill"></i>);
            } else {
                stars.push(<i key={i} className="bi bi-star"></i>);
            }
        }
        return stars;
    }
    return (
        <main>
            <div className="container">
                <h2 className='py-4'>Film</h2>
                <div className="row">
                    <MovieList countryCode={countryCode} ratingStars={ratingStars} />
                </div>

                <h2 className='py-4'>Serie Tv</h2>
                <div className="row">
                    <SeriesList countryCode={countryCode} ratingStars={ratingStars} />
                </div>

            </div>
        </main>
    )
}
