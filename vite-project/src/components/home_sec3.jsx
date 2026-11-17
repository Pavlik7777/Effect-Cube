import { Hero } from "../Photo";
import classes from "../components/home_sec3.module.scss"
export default function Home_sec3(){
    return(
        <section className={classes.Home_sec3}>
            <div className={classes.bes}>
                <h2>OUR BEST SELLERS</h2>
            </div>
            <div className={classes.see}>
                <p>See All</p>
            </div>
            <div className={classes.asd}>
                <div className={classes.asd_container}>
                    <div className={classes.laa}>
                        <img src={Hero.Velve} alt="" />
                        <h2>3-tier red velvet cake</h2>
                        <p>Lorem ipsum dolor sit amet,<br/>
                            consectetur adipiscing elit, sed do <br/>
                            eiusmod tempor.
                        </p>
                        <div className={classes.gaga}>
                            <p>45.90 €</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    <div className={classes.laa}>
                        <img src={Hero.Red} alt="" />
                        <h2>3-tier red velvet cake</h2>
                        <p>Lorem ipsum dolor sit amet,<br/>
                            consectetur adipiscing elit, sed do <br/>
                            eiusmod tempor.
                        </p>
                        <div className={classes.gaga}>
                            <p>45.90 €</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    <div className={classes.laa}>
                        <img src={Hero.Tru} alt="" />
                        <h2>3-tier red velvet cake</h2>
                        <p>Lorem ipsum dolor sit amet,<br/>
                            consectetur adipiscing elit, sed do <br/>
                            eiusmod tempor.
                        </p>
                        <div className={classes.gaga}>
                            <p>45.90 €</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}