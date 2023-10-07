import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Detail() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const { id } = useParams()
    const getDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setMovies(json.data.movie)
        setLoading(false)
    }
    useEffect(() => {
        getDetail()
    }, [id])
    return (
        <div>
            {loading ? <h1>로딩 중...</h1> : <div>
                <h2>{movies.title}</h2>
                <img src={movies.medium_cover_image} alt={movies.title} />
                <h3>{movies.year}</h3>
                <h4>rating: {movies.rating}</h4>
                <p>{movies.genres.map((item) => (
                    <ul>
                        <li key={item}>{item}</li>
                    </ul>
                ))}</p>
                <p>{movies.description_full}</p>
            </div>}
        </div>
    )
}

export default Detail