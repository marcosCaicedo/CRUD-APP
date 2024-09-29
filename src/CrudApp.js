import React, { useState } from 'react';

const CrudApp = () => {
  // Estado inicial de usuarios
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingUser, setEditingUser] = useState('');

  // Agregar un nuevo usuario
  const addUser = () => {
    if (newUser.trim() === '') return;
    setUsers([...users, newUser]);
    setNewUser('');
  };

  // Eliminar un usuario
  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  // Iniciar la edición de un usuario
  const editUser = (index) => {
    setEditingIndex(index);
    setEditingUser(users[index]);
  };

  // Guardar el usuario editado
  const saveUser = () => {
    const updatedUsers = [...users];
    updatedUsers[editingIndex] = editingUser;
    setUsers(updatedUsers);
    setEditingIndex(null);
    setEditingUser('');
  };

  return (
    <div>
      <h1>CRUD de Usuarios</h1>

      {/* Formulario para agregar un nuevo usuario */}
      <div>
        <input
          type="text"
          placeholder="Agregar nuevo usuario"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={addUser}>Agregar</button>
      </div>

      {/* Lista de usuarios */}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editingUser}
                  onChange={(e) => setEditingUser(e.target.value)}
                />
                <button onClick={saveUser}>Guardar</button>
              </div>
            ) : (
              <div>
                {user}
                <button onClick={() => editUser(index)}>Editar</button>
                <button onClick={() => deleteUser(index)}>Eliminar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
