import {useState} from 'react'
import '../Components/Fetch.css'
import {Link} from 'react-router-dom'

function deleteUserData() {
  return (localStorage.removeItem('Data'))
}
function Fetch() {
    const[completeData, setCompleteData]= useState([])
    const[loader, setLoader] = useState(false)
    const [fetchCompleted, setFetchCompleted] = useState('')
    const [count, setCount] = useState(0)

    async function gettingData(){
        setLoader(true)
      let res = await fetch("https://randomuser.me/api/")
      let data = await  res.json() 
        completeData.push(data.results[0])
        setCompleteData([...completeData])
        localStorage.setItem("Data" , JSON.stringify(completeData))
        console.log(completeData)
        setLoader(false)
        setFetchCompleted('"The data successfully fetched"')   
      }
      function FetchData(){
        for(let i = 1 ; i <=50 ; i++){     // Initially i have done it manually but no need to fetch it manually we can do it by api itself
          gettingData() 
        }
        //gettingData()
        setCount ( count+1)
        console.log(count)
        if(loader === false) {
          return fetchCompleted            
      }   
    }

    return (
        <div className='mainComponent'>
        <h1 className='heading'> Fetch User Data By Clicking Below Button</h1>
        <button className='button' onClick={FetchData}> FetchData</button>
        <button className="button" onClick={deleteUserData}>Delete</button>
              
        {loader ? <div className='loader'></div> : null}
        <p className='completeAlert'>{fetchCompleted}</p><br/>
        <Link className='data' to='/data'> DataBase </Link>
        
        </div>
    ) 
}
export default Fetch