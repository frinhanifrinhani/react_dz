const UserDetails = ({key,name, age, profession}) => {

  return (
    <div>
        <ul>
            <li key={key}>Nome: {name}</li>
            <li key={key}>Idade: {age}</li>
            <li key={key}>Profissão: {profession}</li>
            <li key={key}>{age >=18 && <span>Pode tirar habilitação</span> }</li>
        </ul>
    </div>
  )
}

export default UserDetails