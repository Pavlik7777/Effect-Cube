import classes from "../Header/header.module.scss"
import { Hero } from "../Photo"
export default function Header(){
    return(
        <>
            <section className={classes.Header}>
                <header>
                    <nav>
                        <h1>Bakery</h1>
                        <div className={classes.ulll}>
                            <ul>
                                <li>Home</li>
                                <li>Shop</li>
                                <li>Services</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className={classes.loog}>
                            <p>Login/Register</p>
                            <img src={Hero.Laik} alt="" />
                        </div>
                    </nav>
                </header>
            </section>
        </>
    )
}