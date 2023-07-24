export default function Navbar(){
return <nav className="nav">
    <a href="/" className="siteLogo">
        <img src="\src\assets\logotest.png" alt="logo" className="image-tst"/>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/ContactUs">Contact Us</a>
            </li>
            <li>
                <a href="/Login">Login/Register</a>
            </li>
        </ul>
    </a>
</nav>
}