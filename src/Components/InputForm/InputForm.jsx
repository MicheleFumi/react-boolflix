import { useMovieContext } from '../../Context/MyContextData';
export default function InputForm() {

    const { searchQuery, setSearchQuery, fetchMovies, fetchSeries } = useMovieContext();

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchMovies(searchQuery);
        fetchSeries(searchQuery);
    };



    return (
        <div className="col-6 col-md-8 d-flex justify-content-end py-3">
            <form onSubmit={handleSearchSubmit} className="w-100" style={{ maxWidth: "500px" }}>
                <div className="input-group">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Cerca un film..."
                    />
                    <button type="submit" className="btn btn-dark btn-outline-light">
                        Cerca
                    </button>
                </div>
            </form>
        </div>


    )
}