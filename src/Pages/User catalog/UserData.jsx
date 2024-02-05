import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Table from "../../components/Table";
import { UserHead as header } from "../../components/data";
import { deleteUser, getTableDataSearch } from "../../api/api";
import SubNavbar from "../../components/SubNavbar";
import { CSVLink, CSVDownload } from "react-csv";
import downloadImg from "../../assets/download.png";
import refreshBtn from "../../assets/refresh.png";
import Search from "../../components/Search";

const UserData = () => {
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const fetchData = async () => {
    try {
      const response = await getTableDataSearch();
      const userData = response.data?.data;
      setUser(userData);
      console.log("userData", userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const handleRefresh = () => {
    setTimeout(() => {
      fetchData();
    }, 500);
  };

  const renderDownloadBtn = () => (
    <div className="flex space-x-4">
      <CSVLink data={user}>
        <img src={downloadImg} alt="downlaod" />
      </CSVLink>
      <button onClick={handleRefresh}>
        <img src={refreshBtn} alt="refresh" />
      </button>
    </div>
  );
  const rowRenderer = (product) => {
    const { id, name, email, phone_no, created_on } = product;

    const searchResults = [id, name, email, phone_no, created_on].filter(
      (field) => typeof field === "string"
    );

    const matchesSearchTerm = searchResults.some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!matchesSearchTerm) {
      return null;
    }
    return (
      <>
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {id}
        </td>
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4">{phone_no}</td>
        <td className="px-6 py-4">{created_on}</td>
        <td className="px-6 py-4 ">
          <button
            onClick={() => handleDelete(id)}
            className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
          >
            Delete
          </button>
        </td>
      </>
    );
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Header />

      <SubNavbar downButton={renderDownloadBtn} />
      <Search handleSearch={handleSearch} />
      <Table headers={header} data={user} rowrender={rowRenderer} />
    </div>
  );
};

export default UserData;