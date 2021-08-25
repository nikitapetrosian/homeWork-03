import React, { useState } from "react";
import api from "../api";
// import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  //   console.log(users[0]);
  //   const handleDelete = (userId)=>{ }
  //   const randerPhrse = (number)=>{ }
  const onDelete = (id) => {
    const newArr = users.filter((user) => user._id != id);
    setUsers(newArr);
  };
  return (
    <>
      <h1>
        <span className="badge bg-secondary">
          {users?.length ? `с тобой тусует ${users.length}` : "никого нет"}
        </span>
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((quality) => (
                  <span
                    className={`p-1 m-2 bg-${quality.color} text-white smallText `}
                    key={quality._id}
                    // style={{ backgroundColor:  }}
                  >
                    {quality.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
                <button
                  className="badge bg-danger"
                  onClick={() => onDelete(user._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
