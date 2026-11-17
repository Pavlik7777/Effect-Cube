import { Hero } from "../Photo";
import classes from "../components/home_sec2.module.scss"
export default function Home_sec2(){
    return(
        <>
            <section className={classes.Home_sec2}>
                <div className={classes.an}>
                    <div className={classes.an_container}>
                        <div className={classes.liga}>
                            <p>See Collection</p>
                            <h2>OUR FINE HOME<br/>
                                MADE CHOCOLATES
                            </h2>
                        </div>
                        <div className={classes.agg}>
                            <img src={Hero.Baq} alt="" />
                            <div className={classes.kol}>
                                <ul>
                                    <li>There are some<br/>
                                        redeming factors in<br/>
                                        greeking text
                                    </li>
                                    <li>There are some<br/>
                                        redeming factors in<br/>
                                        greeking text
                                    </li>
                                    <li>There are some<br/>
                                        redeming factors in<br/>
                                        greeking text
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}