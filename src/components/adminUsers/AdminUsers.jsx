import styles from "./adminUsers.module.css";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const AdminUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/users`, {
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed");
            }

            const json = await res.json();
            setUsers(json);
        };

        fetchData();
    }, []);

    const handleDelete = async (email) => {
        const user = users.find(user => user.email === email);
        const userId = user.id;

        try {
          const response = await fetch(`/api/users/${email}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ id: userId }),
          });
      
          if (!response.ok) {
            throw new Error('Error deleting user');
          }
      
          setUsers(users.filter((user) => user.email !== email));
          fetchData();
        } catch (error) {
          console.error('Error:', error);
        }
      };
      return (
        <div>
            <h2 className={styles.listTitle}>Users List</h2>
          {users.map((user) => (
            <div key={user.id} className={styles.user}>
                <Image src={user.image} alt={`Profile of ${user.email}`} width={70} height={70}></Image>
                <div className={styles.userContent} dangerouslySetInnerHTML={{ __html: user.email }} />
                <button onClick={() => handleDelete(user.email)} className={styles.deleteButton}>
                    Delete
                </button>
            </div>
          ))}
        </div>
      );
}

export default AdminUsers;