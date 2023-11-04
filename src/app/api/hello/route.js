import axios from "axios";
import fetch from "node-fetch";
export default async function getData() {
    
    const wprest = await fetch(`${process.env.NEXT_PUBLIC_URL}/graphql`,{
      method: 'POST',
      headers:{
      'Content-Type':'application/json',
      },
      body: JSON.parse(JSON.stringify({
        query:`
        query WPPOSTS {
      posts{ 
        nodes {
          title
          slug
           date
           content
           id
           
        }
      }
       }  
       ` 
      
      }))
      
      })
     return wprest.json()

    }
     
  