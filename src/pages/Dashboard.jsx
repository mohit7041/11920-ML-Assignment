import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../auth/helper';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [user, setUser] = useState('');
  useEffect(() => {
    // get user info from local storage
    const user = getCurrentUser().user;
    setUser(user);
    console.log(user);
  }, []);
  return (
    <>
      <Navbar />
      <section className="h-[90vh] px-4 py-6">
        <div>
          <h1 className="text-3xl text-center">Welcome to your Dashboard!</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
