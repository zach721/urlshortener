
import {useState, useEffect} from 'react'

import './App.css';

const axios = require('axios')


function App() {

  const [yoururl, setYoururl] = useState(null)
  const [shortenedurl, setShortenedurl] = useState(null)


  let url = ` https://api.shrtco.de/v2/shorten?url=${yoururl}`
useEffect(()=>{

  axios.get(url).then((res)=>{



setShortenedurl(res.data.result.short_link)
  })

  console.log('la url es '+url)
  console.log('la url es '+yoururl)
  
  console.log('la url es '+shortenedurl)

},[yoururl])


  function handleKeyDown (e){
    if (e.key === 'Enter') {
      setYoururl(e.target.value)
    }
  }
  return (
    <div>
    <h1 id='text' >Your url : {shortenedurl}</h1>
    
<input id="input" autocomplete="off" onKeyDown={handleKeyDown} type="search" placeholder="Type your url..."   />
<button id='button'
  onClick={() =>  navigator.clipboard.writeText(shortenedurl)}
>
  Copy
</button>
    </div>
  );
}

export default App;
