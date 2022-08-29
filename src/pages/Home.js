import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Logo from '../components/Logo'
import ShortcutArea from '../components/ShortcutArea'
import './Home.css'

const Home = function () {
    return (
        <div>
            <Header />
            <div className="home-body">
            <Logo />
             <SearchBar /> 
            <ShortcutArea/>
            </div>
            
            
        </div>
    )
}

export default Home