import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'



const NewPerson2 = (props) => {

  const handleSubmit = () => {
    props.updater(!props.list)
  }
  return(
    <div className = "flex-container">
      <div className = "inputFields">
        <h3>ID</h3>
        <h3>Name</h3>
        <h3>Position</h3>
        <h3>Age</h3>
      </div>

      <div className = "Input-Area">
        <form action="/newPerson" method = "post" className = "actualInput" onSubmit = {() => handleSubmit()}>
          <input type="number" id="id" name="id" placeholder="Enter ID"/> <br></br>

          <input type="text" id="name" name="name" placeholder="Enter Name"/> <br></br>

          <input type="text" id="position" name="position" placeholder="Enter Position"/> <br></br>

          <input type="number" id="age" name="age" placeholder="Enter Age"/>

          <div className = "submission">
          <button type = "submit" value="subimt">Submit</button>
          <button type = "reset" value = "reset">Reset</button>
        </div>

        </form>
      </div>
    </div>
  )
}

const SearchPerson = (props) => {
  const [name, setName] = React.useState('')
  const [empty, setEmpty] = React.useState(true)

  const handleSearch = (name) => {
    setName(name)
    if(name === '')
    {
      setEmpty(true)
      console.log('empty')
    }
    else
    {
      setEmpty(false)
      console.log('not empty')
    }
  }
 

  return(
    <div>
      <input type="text" name="name" placeholder = "Type to Search" 
      onChange = {(event) => handleSearch(event.target.value)}
      style = {{width:'98%'}}
      />
      {empty ? 
      (<Empty/>) : 
      (<NotEmpty name = {name}/>) 
      }

      {/* <Empty /> */}
     
    </div>
  )
}
const Empty = (props) => 
{
  const [listOfStaff, setListOfStaff] = React.useState([])
  
  React.useEffect(() => 
  {
    fetch('/allPeople2').then(response => response.json().then(res => 
      {
        setListOfStaff(res)
        console.log(res)
        console.log(typeof(res))
      }))
   
  }, 
  [props.list])

  return(
    <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Position</th>
        <th>ID</th>
      </tr>
      {listOfStaff.map((row) => 
      <tr>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>{row.position}</td>
        <td>{row.id}</td>
      </tr>
      ) }
    </table>


    </div>
  )
}


const NotEmpty = (props) => 
{
  const [person, setPerson] = React.useState(['No One Found'])
  useEffect(() => {
    fetch(`/getSpecificStaff?name=${props.name}`).then(response => response.json().then(res => {
      setPerson(res)
    }))
  }, [props.name])

  return(
    <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Position</th>
        <th>ID</th>
      </tr>
      {person.map((row) => 
      <tr>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>{row.position}</td>
        <td>{row.id}</td>
      </tr>
      ) }
    </table>


    </div>
      
  )
  
}



function App() 
{
  const [updateList, setUpdateList] = React.useState(false)  

  const handleChange = (props) => {
    setUpdateList(props)
  }



  return (
    <div className="App">
      <header className="App-header">
          <SearchPerson list = {updateList} updater = {setUpdateList}/>
          <br></br>
          <NewPerson2 list = {updateList} updater = {handleChange}/>
      </header>
    </div>
  );
}

export default App;
