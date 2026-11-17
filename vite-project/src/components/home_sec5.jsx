import { Hero } from "../Photo";
import classes from "../components/home_sec5.module.scss"
export default function Home_sec5(){
    return(
        <>
            <section className={classes.Home_sec5}>
                <div className={classes.cus }>
                    <h2>OUR CUSTOMERS</h2>
                </div>
                <div className={classes.ara}>
                    <div className={classes.ara_container}>
                        <div className={classes.kjo}>
                            <div className={classes.hu}>
                                <img src={Hero.Tet} alt="" />
                                <div className={classes.fr}>
                                    <h2>Bianka P.</h2>
                                    <p>Bratislava, Slovakia</p>
                                </div>
                            </div>
                            <p className={classes.pip}>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit, sed do eiusmod tempor incididunt<br/>
                                ut labore et dolore magna aliqua. Ut enim ad<br/>
                                minim veniam, quis nostrud exercitation ullamco.
                            </p>
                        </div>
                         <div className={classes.kjo}>
                            <div className={classes.hu}>
                                <img src={Hero.Tet} alt="" />
                                <div className={classes.fr}>
                                    <h2>Bianka P.</h2>
                                    <p>Bratislava, Slovakia</p>
                                </div>
                            </div>
                            <p className={classes.pip}>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit, sed do eiusmod tempor incididunt<br/>
                                ut labore et dolore magna aliqua. Ut enim ad<br/>
                                minim veniam, quis nostrud exercitation ullamco.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}