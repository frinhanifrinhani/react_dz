import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Thiago","Pedro", "João","Maria"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Thiago" , age: 33},
        {id: 2, name: "Pedro" , age: 25},
        {id: 3, name: "João" , age: 20},
    ]);

    const deleteRandon = () => {

        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });

    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user,i) => (
                <li key={user.id}>Usuário {i+1}: {user.name} - {user.age} </li>
            ))}
        </ul>

        <button onClick={deleteRandon}>Delete Random</button>


    </div>
  )
}

export default ListRender