import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
      
      </div>

      
    </main>
  )
}

 
 
 
// async function getData() {
 
// const wprest = await fetch('https://nollymania.com/graphql',{
//   method: 'POST',
//   headers:{
//   'Content-Type':'application/json'
//   },
//   body: JSON.stringify({
//     query:`
//     query WPPOSTS {
//   posts{ 
//     nodes {
//       title
//       slug
//        date
//        content
//        id
       
//     }
//   }
//    }  
//    ` 
  
//   })
  
//   })
//   return wprest.json();
// }
 
 
 
// // This is an async Server Component
// export default async function Page() {
//   const data = await getData();
 
//   return <main>{/* ... */}</main>;
// }