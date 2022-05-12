import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createPony } from './services/fetch-utils';

export default function CreatePage() {
  const history = useHistory();
  const [createForm, setCreateForm] = useState({
    firstname: '',
    lastname: '',
    location: '',
    kind: 'Earth Pony',
    element: '',
    friends: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await createPony(createForm);
    history.push('/ListPage');
  }

  return (
    <div className='create'>
      <form className='createForm' onSubmit={handleSubmit}>
        <h2>Add pony</h2>
        <label>
            First Name
          <input
            required
            name='firstname' 
            value={createForm.firstname} 
            onChange={e => setCreateForm({
              ...createForm,
              firstname: e.target.value,
            })} />
        </label>
        <label>
            Last Name
          <input
            required
            name='lastname' 
            value={createForm.lastname} 
            onChange={e => setCreateForm({
              ...createForm,
              lastname: e.target.value,
            })} />
        </label>
        <label>
            Kind
          <select
            required
            value={createForm.kind} 
            onChange={e => setCreateForm({
              ...createForm,
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
            value={createForm.location} 
            onChange={e => setCreateForm({
              ...createForm,
              location: e.target.value,
            })} />
        </label>
        <label>
            Friends
          <input required name='friends'
            value={createForm.friends} 
            onChange={e => setCreateForm({
              ...createForm,
              friends: e.target.value,
            })} />
        </label>
        <label>
            Element
          <input required name='element'
            value={createForm.element} 
            onChange={e => setCreateForm({
              ...createForm,
              element: e.target.value,
            })} />
        </label>
        <button>Create pony</button>
      </form>
    </div>
  );
}
