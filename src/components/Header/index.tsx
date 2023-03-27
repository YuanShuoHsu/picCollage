import styles from "./index.module.scss"

import { Link } from "react-router-dom"
import logo from "../../images/logo-icon.png"

export default function Header() {
    return (
        <div className={styles.header}>
            <Link className={styles["header__link"]} to={"https://piccollage.com/"}>
                <div className={styles["header__logo"]}>
                    <img className={styles["header__logo-image"]} src={logo} alt="PicCollage" />
                </div>
            </Link>
        </div>
    )
}
