import './Header.css'

export const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>Logo</div>
            <ul>
                <li><a href="#">Página inicial</a></li>
                <li><a href="#">Para você</a></li>
                <li><a href="#">Para seu negócio</a></li>
            </ul>
        </div>
    )
}