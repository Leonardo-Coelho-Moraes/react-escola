
import styles from "./Loading.module.css"
import { AiOutlineLoading } from "react-icons/ai";
export default function Loading(){
return(
<div className={styles.loader_container}>
    <AiOutlineLoading className={styles.loader} />
</div>
);
}