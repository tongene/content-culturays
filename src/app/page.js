import Image from 'next/image'
import styles from './page.module.css'
import getData from '../app/api/hello/route'
// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.js</code>
//         </p>
      
//       </div>

       
//     </main>
//   )
// }


export default async function Page() {
  const data = await getData();
 
  return (
    <p>
      
    </p>
  );
}
 
 
 
