import React, { useState } from 'react';
import UserFace from './Components/UserFace';
import UsersList from './Components/UsersList';

const App = () => {
  const [users, setUsers] = useState([]);

  const submission = user => {
    setUsers(prevUsers => {
      return [user, ...prevUsers];
    })
  }

  return (
    <div>
      <section>
        <UserFace onAddSubmission={submission} />
      </section>
      <section id='myList'>
        {users.length > 0 && <UsersList items={users} />}
      </section>
    </div>
  );
}

export default App;