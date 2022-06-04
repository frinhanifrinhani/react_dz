const Container = ({children, myProp}) => {
  return (
    <div>
        <h1>Este é o título do container</h1>
        {children}
        {myProp}
    </div>
  )
}

export default Container