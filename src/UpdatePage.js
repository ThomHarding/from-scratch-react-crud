import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getPonyById } from './services/fetch-utils';
import { updatePony } from './services/fetch-utils';

export default function DetailPage() {
  const [pony, setPony] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [kind, setKind] = useState('');
  const [location, setLocation] = useState('');
  const [friends, setFriends] = useState('');
  const [element, setElement] = useState('');

  const id = useRouteMatch('ponies/:id').params.id;

  useEffect(() => {
    async function loadData() {
      const ponyData = await getPonyById(id);
      setPony(ponyData);
      setFirstName([pony].firstname);
      setFirstName([pony].lastname);
      setKind([pony].kind);
      setLocation([pony].location);
      setFriends([pony].friends);
      setElement([pony].element);
    }
    loadData();
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault();
    await updateEatery(id, {
      firstname: firstName,
      lastName: lastName,
      kind: kind,
      location: location,
      friends: friends,
      element: element
    });

    history.push('/ListPage');
  }

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
