import React, { useEffect, useState } from "react";
import Navbar2 from "./Navbar2";

const AdminPage = () => {
  const [mentees, setMentees] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    // Fetch users when the component loads
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://172.20.10.3:5174/api/users"); // Adjust port if needed
        const data = await response.json();
        setMentees(data.mentees);
        setMentors(data.mentors);
        setAdmins(data.admins);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Admin Page: User Management</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mentees</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {mentees.length === 0 ? (
                <tr>
                  <td className="text-center py-4 col-span-2">
                    No mentees found
                  </td>
                </tr>
              ) : (
                mentees.map((mentee: any, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{mentee.name}</td>
                    <td className="py-2 px-4 border-b">{mentee.email}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mentors</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {mentors.length === 0 ? (
                <tr>
                  <td className="text-center py-4 col-span-2">
                    No mentors found
                  </td>
                </tr>
              ) : (
                mentors.map((mentor: any, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{mentor.name}</td>
                    <td className="py-2 px-4 border-b">{mentor.email}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Admins</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {admins.length === 0 ? (
                <tr>
                  <td className="text-center py-4 col-span-2">
                    No admins found
                  </td>
                </tr>
              ) : (
                admins.map((admin: any, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{admin.name}</td>
                    <td className="py-2 px-4 border-b">{admin.email}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
