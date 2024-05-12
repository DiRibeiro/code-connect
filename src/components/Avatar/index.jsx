import Image from "next/image"
import styles from './avata.module.css'

export const Avatar = ({ name, imageSrc }) => {
    return (
        <ul>
            <li>
                <Image src={imageSrc} alt={`Avatar do(a) ${name}`} width={32} height={32} className={styles.avatar} />
            </li>
            <li>
                @{name}
            </li>
        </ul>
    )
}