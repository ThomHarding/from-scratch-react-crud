import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getPonyById, updatePony } from './services/fetch-utils';

export default function AddFriend() {
  const [pony, setPony] = useState({});
  const [updateForm, setUpdateForm] = useState({
    firstName: '',
    lastName: '',
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
    let friendArray = pony.friends;
    friendArray.push(updateForm.firstName + ' ' + updateForm.lastName);
    await updatePony(id, {
      ...pony,
      friends: friendArray,
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
        <button>Add friend</button>
      </form>
    </div>
  );
}
