import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getPonyById } from './services/fetch-utils';
import { updatePony } from './services/fetch-utils';

export default function DetailPage() {
  const [pony, setPony] = useState({});
  const id = useRouteMatch('ponies/:id').params.id;

  useEffect(() => {
    async function loadData() {
      const ponyData = await getPonyById(id);
      setPony(ponyData);
    }
    loadData();
  }, [id]);

  return (
    //todo: the entire thing
    <div>
      {/* display each part of the item separately? */}
      {/* have it be an input field that updates state on change? */}
      {/* submit update request using fetch utils on submit */}
      {/* wait this has to be a form */}
    </div>
  );
}
