import React from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArabicForm from "../../components/Form/ArabicForm";
const AddProperties = () => {
  return (
    <div>
      <Header />
      <Form btnText="Send" />
      <ArabicForm />
    </div>
  );
};

export default AddProperties;
