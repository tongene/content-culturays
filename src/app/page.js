import Image from 'next/image'
import styles from './page.module.css'
import getData from '../app/api/hello/route'


export default async function Page() {
 const data = await getData(); 
 //console.log( data.data.posts.nodes )
  return (
    <p>
    text
    </p>
  );
}
 
 
 
