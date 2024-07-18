import { FunctionComponent } from 'react';
import { useAppSelector } from '../hooks/redux';

interface Props {}

const Dashboard: FunctionComponent<Props> = () => {
  const users = useAppSelector((state) => state.users.users);
  const loading = useAppSelector((state) => state.users.loading);


  return (
    <div className="dashboard container">
      <h2>Dashboard</h2>
      {loading && (
          <div className="loading">
            <div className="loader"></div>
            Loading...
          </div>
        )}
      <div>
        {users.map((user, index) => (
          <div className="user" key={index}>
            <h3>User {index + 1}</h3>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Number:</strong> {user.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
