import '../style sheets/hero.css'
import aaImg from '../img/aa-big-banner.png'

function Search() {
    return (
        <div className='search--Wrapper'>
            <h2>Search For Your Next Car</h2>
            <img className='search--img' src={aaImg}></img>
        </div>
    )
}

export default Search