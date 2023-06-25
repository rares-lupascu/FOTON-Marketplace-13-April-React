import React, { memo } from 'react'
import styles from "./styles.module.scss"
export const InfoBox = memo(() => {

    return (
        <div className={styles.infoBox}>
            <div>
                <h1 className={`Content18`}>
                    <span>Info:</span>
                    <br></br>
                </h1>
                <span>
                    <span>
                        Items can exist on their own within a Project or be placed
                        within a Collection. In both cases, once an Item is
                        created it can&apos;t be moved to another Collection or
                        outside of one.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                        Once you&apos;ve created an item, its settings can&apos;t
                        be altered anymore.
                    </span>
                    <br></br>
                </span>
            </div>
        </div >
    )
})