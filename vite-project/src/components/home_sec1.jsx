import Header from "../Header/header";
import { Hero } from "../Photo";
import classes from "../components/home_sec1.module.scss"
export default function Home_sec1(){
    return(
        <>
            <Header/>
            <section className={classes.Home_sec1}>
                <div className={classes.lo}>
                    <div className={classes.lo_container}>
                        <div className={classes.ala}>
                            <h2>Sweet moments,<br/>
                                freshly baked with<br/>
                                love
                            </h2>
                            <p>Customized cakes, treats and every thing sweet<br/>
                                for all your special moments.
                            </p>
                            <button>Shop Now</button>
                            <img src={Hero.Soc} alt="" />
                        </div>
                        <img className={classes.po} src={Hero.Ponch} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}