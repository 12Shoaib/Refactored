import {useState} from 'react'
import Pagination from './Pagination'

const Page1 = () => {
    const [search, setSearch] =useState('')    

const items = JSON.parse(localStorage.getItem('Data'))
const filteringOnlyTenArrays = items.filter((x,i)=>i>10 && i<=20)
console.log(items, 'Iam in Data page')
    
   return(
    <div>
        
        <h1> Iam Page 1</h1>
       <div>
            
            <input onChange={(e) => setSearch(e.target.value) } className='search' type='text' placeholder='Search'></input>
            <table border='1px' className='table' >
    <tr>
        <th className='tablecoloumn'>Image</th>
        <th className='tablecoloumn'>Name</th>
        <th className='tablecoloumn'>Email</th>
        <th className='tablecoloumn'>Gender</th>
        <th className='tablecoloumn'>Phone</th>
        <th className='tablecoloumn'>Country</th>
        </tr>
        {filteringOnlyTenArrays.filter((element) => element.name.first.toLowerCase().includes(search.toLowerCase())).map((element) => <><tr> 
        <td><img 
        src={element.picture.thumbnail}/></td>
        <td>{element.name.first}</td>
        <td>{element.email}</td>
        <td>{element.gender}</td>
        <td>{element.phone}</td>
        <td>{element.location.country}</td>
            </tr> </>)}
        </table> 
        <Pagination />
        

        </div>
    </div>
   ) 
}
export default Page1