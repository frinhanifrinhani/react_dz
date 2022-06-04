const UserDetails = ({name, age, profession}) => {

  return (
    <div>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {profession}</li>
            <li>{age >=18 && <span>Pode tirar habilitação</span> }</li>
        </ul>
    </div>
  )
}

export default UserDetails