function UserCard({ nome, idade, profissao }) {
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>
        <p className="card-text">Idade: {idade}</p>
        <p className="card-text">Profissão: {profissao}</p>
      </div>
    </div>
  )
}

export default UserCard