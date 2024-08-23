import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>

        <Link to='/'>Home</Link>
        <Link to='/create'>Create a Post</Link>

    </div>
  )
}

export default Navbar