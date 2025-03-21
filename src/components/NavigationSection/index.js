import {withRouter, Link} from 'react-router-dom'

import './index.css'

const NavigatinSection = () => (
  <nav className="nav-container">
    <p className="path">
      <Link className="link" to="/profile">
        Profile
      </Link>
    </p>
    <p className="path">
      <Link className="link" to="/account">
        Account
      </Link>
    </p>
  </nav>
)

export default withRouter(NavigatinSection)
