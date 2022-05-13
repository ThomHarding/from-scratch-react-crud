import { useState, useEffect } from 'react';
import { getFriendsByPonyId } from './services/fetch-utils';
import Friend from './Friend';

export default function ListPage({ id }) {
  const [ponies, setPonies] = useState([]);

  useEffect(() => {
    async function loadData() {
      const ponyData = await getFriendsByPonyId(id);
      setPonies(ponyData.friends);
    }

    loadData();
  }, [id]);

  return (
    <div className='list friends'>
      { 
        ponies.map(friend => <Friend key={friend.id} friend={friend} />
        )
      }
    </div>
  );
}
