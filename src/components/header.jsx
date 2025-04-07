import { Link } from "react-router-dom"

export default function Header () {
    
    return (
        <nav>
          <ul className="flex items-center text-[20px] gap-6">
            <li>
              <Link to="/">Game Checker</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
    )
}