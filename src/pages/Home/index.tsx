import styles from "./index.module.scss"

import FindOutlier from '../../components/FindOutlier'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles["home__background"]}></div>
      <div className={styles["home__main"]}>
        <FindOutlier />
      </div>
    </div>
  )
}
