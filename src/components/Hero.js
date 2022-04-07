import '../style sheets/hero.css'
import showroom from '../img/showroom.jpg'

function Hero() {
    return(
        <div>
            <img className='hero--bg' src={showroom}></img>
        </div>
    )
}

export default Hero;