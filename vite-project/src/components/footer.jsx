import { Hero } from "../Photo";
import classes from "../components/footer.module.scss"
export default function Footer(){
    return(
        <>
            <section className={classes.Footer}>
                <div className={classes.foo}>
                    <div className={classes.foo_container}>
                        <div className={classes.bak}>
                            <h2>Bakery</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit, sed do eiusmod tempor incididunt<br/>
                                ut labore et dolore magna aliqua.
                            </p>
                            <img src={Hero.Fra} alt="" />
                        </div>
                        <div className={classes.haha}>
                            <div className={classes.ulf}>
                                <h2>OUR STORES</h2>
                                <ul>
                                    <li>SLOVAKIA</li>
                                    <li>CZECH REPUBLIC</li>
                                    <li>FINLAND</li>
                                    <li>POLAND</li>
                                </ul>
                            </div>
                            <div className={classes.uls}>
                                <h2>USEFUL LINKS</h2>
                                <ul>
                                    <li>HOME</li>
                                    <li>PRIVACY POLICY</li>
                                    <li>TERMS CONDITIONS</li>
                                    <li>CONTACT US</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}