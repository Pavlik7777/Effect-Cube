import { Hero } from "../Photo";
import classes from "../components/home_sec4.module.scss"
export default function Home_sec4(){
    return(
        <>
            <section className={classes.Home_sec4}>
                <div className={classes.arti}>
                    <h2>OUR NEW ARTICLES</h2>
                </div>
                <div className={classes.des}>
                    <div className={classes.des_container}>
                        <div className={classes.kolo}>
                            <img className={classes.Cooc} src={Hero.Cooc} alt="" />
                            <button>23<br/>
                                MAR
                            </button>
                            <p>How to make perfect<br/>
                                cakes at home
                            </p>
                        </div>
                        <div className={classes.kolo}>
                            <img className={classes.Cooc} src={Hero.Pan} alt="" />
                            <button>23<br/>
                                MAR
                            </button>
                            <p>How to make perfect<br/>
                                cakes at home
                            </p>
                        </div>
                        <div className={classes.kolo}>
                            <img className={classes.Cooc} src={Hero.Boa} alt="" />
                            <button>23<br/>
                                MAR
                            </button>
                            <p>How to make perfect<br/>
                                cakes at home
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}