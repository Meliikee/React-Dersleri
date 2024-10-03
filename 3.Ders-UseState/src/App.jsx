import { useState } from 'react'
import './App.css'

function App() {

  // useState : hooks

  const [firstName, setFirstName] = useState('Melike');
  const [lastName, setLastName] = useState('Dönmez');

  const [names, setNames] = useState(["Melike","Zeynep","Sariye","Kübra"]);
  const [userInfo, setUserInfo] = useState({username: "Melike" , password: "951753"})
  const [show,setShow] = useState(false);

  const handleChange = () => {
    debugger;
    setFirstName("Zeynep")
  }

  const [count, setCount] = useState(0);

  // useState : Bir state in değerini set metodunu kullanarak değiştirdiğinde component yeniden render edilir.
  return (
    <>
      <div>
        {/* <div>
          {firstName} {lastName}
        </div>
        <div><button onClick={() => setFirstName("Sariye")}>İsmi değiştir</button></div>
        <div><button onClick={handleChange}>İsmi değiştir</button></div>

        <div>
          {
            names.map((name,index) => (
              <div key={index}>{name}</div>
            ))
          }
        </div> */}

        {/* <div>
            {userInfo.username} {userInfo.password}
        </div>
       
      {show ? <div>{userInfo.username} {userInfo.password} </div> : <p>Bilgileri gösterme</p>} */}


          <div>
            <button onClick={arttir}>
              Arttır
            </button>
          </div>
      </div>
    </>
  )
}

export default App
