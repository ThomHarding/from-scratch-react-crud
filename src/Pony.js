import { Link } from 'react-router-dom';
import FriendList from './FriendList';

export default function Pony({ pony }) {
  return (
    <Link to={`/ponies/${pony.id}`}>
      <div className='game'>
        <h3>{pony.firstname} {pony.lastname}</h3>
        <p>A {pony.kind} who lives in {pony.location } </p>
        <p>representing the Element of {pony.element}</p>
        <ul>Friends with: <FriendList id={pony.id}/> </ul>
      </div>
    </Link>

  );
}
