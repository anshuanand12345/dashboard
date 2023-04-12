import React, { useEffect, useState } from 'react';
import './User.css';
import axios from 'axios';
import { Link } from "react-router-dom";



const Users = () => {

  useEffect(() => {
    fetchtable();
  }, []);

  const [table, setTable] = useState([]);

  const fetchtable = async () => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    setTable(result.data);

  }

  const deleteitems = (id) => {
    setTable((olditems) => {
      return olditems.filter((Elm, iodex) => {
        return iodex !== id;
      })
    });
  };

  return (
   <>
   <div className='usersdata'>

        <div className='home'>
          <table className='tableform'>
            <thead>
              <tr className='tabletop'>
                <td>Sl No</td>
                <td>Name</td>
                <td>UserName</td>
                <td>Email Id</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {table.map((user, index) => (
                <tr className='tabledown' key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link to={`/view?${user.id}`}><button className='view'>View</button></Link>
                    <button className='edit'>Edit</button>
                    <button className='delete' onClick={() => { deleteitems(index) }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    
   </div>
     </>
  )
}

export default Users;