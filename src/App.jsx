import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import { response } from "express";

export default function App() {

const [friends, setFriends] = useState([]);
const [picture, setPicture] = useState('');
const [name, setName] = useState('')

// getSavedFriends = () => {
//   axios.get(`./api/friends`)
//   .then((res) => {
//     console.log(res.data)
//     setFriends(res.data)
//   })
// }

useEffect(() => {
  axios.get('/api/friends')
  .then(res => {
    setFriends(res.data)
  })
}, [])


//need to use setFriend to add a new friend obj to the friends arr on state
const addFriend = () => { 
  setFriends([...friends,{
    picture: picture,
    name: name
  }])
}

console.log(picture)
console.log(name)

const friendInfo = friends.map((friend) => (
  <div>
    <img style={{height: "500px", width: "500px", marginLeft: "auto", marginRight: "auto", display: "block"}} 
    className="img"key={friend.picture} src={friend.picture} alt="friendPicture" />
    <span style={{fontSize: "50px", fontFamily: "sans-serif", fontStyle: "bold"}} 
    key={friend.name}>{friend.name}</span>
  </div>
))
let friendResult = friendInfo

return <div key={friendResult}>
    Picture: <input 
    value={ picture } 
    type="text" 
    onChange={(evt) => setPicture(evt.target.value)}
    />
    Name: <input 
    value={ name }
    type="text"
    onChange={(evt) => setName(evt.target.value)}
    />
    <button 
    type="button"
    onClick={() => {
      addFriend();
      setPicture("");
      setName("");
    }}
    >Add Friend</button>
    {friendResult}
  </div>;
}
