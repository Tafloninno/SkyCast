import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faAngleLeft, faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';

const Nav = () => (

  <nav>
    <ul>
      <li className="back_button">
        <Link to="/">
          <FontAwesomeIcon icon={faAngleLeft} className="white" />
        </Link>
        <p className="white">2015</p>
      </li>
      <li className="white">most views</li>
      <li>
        <FontAwesomeIcon icon={faMicrophone} className="white" />
        <FontAwesomeIcon icon={faGear} className="white" />
      </li>
    </ul>

  </nav>
);

export default Nav;
