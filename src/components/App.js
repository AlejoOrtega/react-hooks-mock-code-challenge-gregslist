import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Advance from "./Advance";

function App() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [update, setUpdate] = useState(false)
  const [sortBy, setSort] = useState('')

  let modifiedData = data.filter((aData)=> search? aData.description.includes(search) : true)
                          .sort((itemA, itemB) => sortBy? itemA.location.localeCompare(itemB.location) : true)

  useEffect(()=>{

    const storeData= (incomingData) => {
      setData([...incomingData])
    }

    fetch('http://localhost:6001/listings')
    .then(res=> res.json())
    .then(data=> storeData(data))
    .catch(err=> console.log(err))

  },[update])

  const handleOnDelete = (id) => {
    fetch(`http://localhost:6001/listings/${id}`,{
      method:'DELETE',
    }).then( ()=> setUpdate((pre)=>!pre) )
    .catch(err => console.log(err))
  }

  const handleOnSubmitSearch = (newSearch) => {
    setSearch(() => newSearch)
  }

  const handleOnChangeSort = (newSort) => {
    setSort(() => newSort)
  }

  const handleOnSubmitForm = (form) => {
    fetch('http://localhost:6001/listings',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then( ()=> setUpdate((pre)=>!pre) )
    .catch(err => console.log(err))
  }
  
  

  return (
    <div className="app">
      <Header onSubmit  = {handleOnSubmitSearch}/>
      <Advance sort={sortBy} onChangeSort={handleOnChangeSort} onSubmit={handleOnSubmitForm}/>
      <ListingsContainer data={modifiedData} onDelete={handleOnDelete}/>
    </div>
  );
}

export default App;
