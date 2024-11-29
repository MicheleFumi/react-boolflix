import MovieList from '../MovieList/MovieList';
import SeriesList from '../SeriesList/SeriesList';
import './style.css'
export default function AppMain() {
    return (
        <main>
            <div className="container">
                <h2 className='py-4'>Film</h2>
                <div className="row">
                    <MovieList />
                </div>

                <h2 className='py-4'>Serie Tv</h2>
                <div className="row">
                    <SeriesList />
                </div>

            </div>
        </main>
    )
}
