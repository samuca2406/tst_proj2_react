import users from '../data/users'
import UserCard from '../components/UserCard'

function Home() {
  return (
    <div className="container mt-4">
      <div className="d-flex flex-wrap justify-content-center">
        {users.map(user => (
          <UserCard
            key={user.id}
            nome={user.nome}
            idade={user.idade}
            profissao={user.profissao}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
