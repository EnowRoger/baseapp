import { getposts } from "./api/axios"
import { useState, useffect } from "react"
import searchBar from "./searchBar"
import listPage from "./listPage"

function App() { 
  const [post, setpost] =useState([])
  const [searchResult, setsearchResult] = useState([])
 
  useffect(() => {
    getposts().then(json => {
      setpost(json)
      return json
    }).then(json => {
      setsearchResult(json)
    })
  }, [])

  return (

    <searchBar post={post} setsearchResult={setsearchResult} />
    <listPage searchResults={searchBar} />
  
  )
}

export default App;

