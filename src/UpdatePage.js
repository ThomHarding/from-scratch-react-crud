import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import { getPonyById, updatePony } from './services/fetch-utils';

export default function DetailPage() {
  const [firstName, setFirstNameForm] = useState('');
  const [lastName, setLastNameForm] = useState('');
  const [location, setLocationForm] = useState('');
  const [kind, setKindForm] = useState('');
  const [element, setElementForm] = useState('');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function fetch() {
      const pony = await getPonyById(id);
      setFirstNameForm(pony.firstname);
      setLastNameForm(pony.lastname);
      setLocationForm(pony.location);
      setKindForm(pony.kind);
      setElementForm(pony.element);
    }

    fetch();
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault();
    await updatePony(id, {
      firstname: firstName,
      lastname: lastName,
      kind: kind,
      location: location,
      element: element
    });

    history.push('/ListPage');
  }

  return (
    <div className='update'>
      <form className='updateForm' onSubmit={handleUpdate}>
        <h2>Update {firstName}</h2>
        <label>
            First Name
          <input
            required
            name='firstName' 
            value={firstName} 
            onChange={e => setFirstNameForm(e.target.value)} />
        </label>
        <label>
            Last Name
          <input
            required
            name='lastName' 
            value={lastName} 
            onChange={e => setLastNameForm(e.target.value)} />
        </label>
        <label>
            Kind
          <select
            required
            value={kind} 
            onChange={e => setKindForm(e.target.value)}>
            <option>Earth Pony</option>
            <option>Unicorn</option>
            <option>Pegasus</option>
            <option>Alicorn</option>
          </select>
        </label>
        <label>
            Location
          <input required name='location' 
            value={location} 
            onChange={e => setLocationForm(e.target.value)} />
        </label>
        <label>
            Element
          <input required name='element'
            value={element} 
            onChange={e => setElementForm(e.target.value)} />
        </label>  
        <button>Update pony</button>
        <NavLink to={'/AddFriend/' + id}>Add a friend</NavLink>
      </form>
    </div>
  );
}
