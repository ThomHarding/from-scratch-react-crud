import { useState, useEffect } from 'react';
import { getPonies } from './services/fetch-utils';
import Pony from './Pony';

export default function ListPage() {
  const [ponies, setPonies] = useState([]);

  useEffect(() => {
    async function loadData() {
      const ponyData = await getPonies();
      setPonies(ponyData);
    }

    loadData();
  }, []);

  return (
    <div className='list ponies'>
      { 
        ponies.map(pony => <Pony key={pony.id} pony={pony} />
        )
      }
    </div>
  );
}
