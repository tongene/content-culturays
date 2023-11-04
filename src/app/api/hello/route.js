
export default async function getData() {
 
    const wprest = await fetch('http://content.culturays.com/graphql',{
      method: 'POST',
      headers:{
      'Content-Type':'application/json',
      'Content-Length': 1
      },
      body: JSON.stringify({
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
      
      })
      
      })
      return wprest.json();
    }
     
  