export default function Navbar(){
return <nav className="nav">

    <img src="\src\assets\logotest.png" alt="logo" className="image-tst" href="/"/>

        <ul>
            <li className="active">
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/ContactUs">Contact Us</a>
            </li>
            <li>
                <a href="/Login">Login/Register</a>
            </li>
        </ul>
</nav>
}