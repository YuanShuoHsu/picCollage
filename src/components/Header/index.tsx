import styles from "./index.module.scss"

import { Link } from "react-router-dom"
import logoIcon from "../../images/logo-icon.png"
import logoText from "../../images/logo-text.png"

export default function Header() {
    return (
        <div className={styles.header}>
            <Link className={styles["header__link"]} to={"https://piccollage.com/"}>
                <div className={styles["header__logo"]}>
                    <img className={styles["header__logo-icon"]} src={logoIcon} alt="PicCollage" />
                    <img className={styles["header__logo-text"]} src={logoText} alt="PicCollage" />
                </div>
            </Link>
        </div>
    )
}
