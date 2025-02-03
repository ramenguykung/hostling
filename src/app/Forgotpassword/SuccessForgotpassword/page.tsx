
import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"


export default function Home() {

    return (

        <>


<div className={styles.Frame4}>


<div className={styles.Frame3}>


<div className={styles.login}   >
<div className={styles.textmo}>

</div>

 <h2 className={styles.text}>
 It’s on your inbox!</h2>

 <h2 className={styles.textcontent}>If the credential matched,</h2>
 <h2 className={styles.textcontent}>Instructions will send to your email.</h2>
<br></br>
<br></br>



<div className={styles.ipg1}>

<input  className={styles.input}   type="Email"  placeholder="Email or phone" />   

<div   className={styles.button} ><h6 className={styles.fontSuccess}>Success!</h6></div>   

 <h4> </h4>
</div>







<br></br>




  </div>




<div className={styles.logologin}>    
  <Image src ="/fm.png" width={550}  height={500} alt="logo" />   
   </div>




</div>
</div>  

</>

);
}