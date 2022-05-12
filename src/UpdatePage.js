import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getPonyById, updatePony } from './services/fetch-utils';

export default function DetailPage() {
  const [pony, setPony] = useState({});
  const [updateForm, setUpdateForm] = useState({
    firstName: '',
    lastName: '',
    location: '',
    kind: 'Earth Pony',
    element: '',
    friends: '',
  });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function loadData() {
      const ponyData = await getPonyById(id);
      setPony(ponyData);

    }
    loadData();
  }, [pony, id]);

  async function handleUpdate(e) {
    e.preventDefault();
    await updatePony(id, {
      firstname: updateForm.firstName,
      lastname: updateForm.lastName,
      kind: updateForm.kind,
      location: updateForm.location,
      friends: updateForm.friends,
      element: updateForm.element
    });

    history.push('/ListPage');
  }

  return (
    <div className='update'>
      <form className='updateForm' onSubmit={handleUpdate}>
        <h2>Update pony</h2>
        <label>
            First Name
          <input
            required
            name='firstName' 
            value={updateForm.firstName} 
            onChange={e => setUpdateForm({
              ...updateForm,
              firstName: e.target.value,
            })} />
        </label>
        <label>
            Last Name
          <input
            required
            name='lastName' 
            value={updateForm.lastName} 
            onChange={e => setUpdateForm({
              ...updateForm,
              lastName: e.target.value,
            })} />
        </label>
        <label>
            Kind
          <select
            required
            value={updateForm.kind} 
            onChange={e => setUpdateForm({
              ...updateForm,
              kind: e.target.value,
            })}>
            <option>Earth Pony</option>
            <option>Unicorn</option>
            <option>Pegasus</option>
            <option>Alicorn</option>
          </select>
        </label>
        <label>
            Location
          <input required name='location' 
            value={updateForm.location} 
            onChange={e => setUpdateForm({
              ...updateForm,
              location: e.target.value,
            })} />
        </label>
        <label>
            Friends
          <input required name='friends'
            value={updateForm.friends} 
            onChange={e => setUpdateForm({
              ...updateForm,
              friends: e.target.value,
            })} />
        </label>
        <label>
            Element
          <input required name='element'
            value={updateForm.element} 
            onChange={e => setUpdateForm({
              ...updateForm,
              element: e.target.value,
            })} />
        </label>
        
        <button>Update pony</button>
      </form>
    </div>
  );
}
