import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import ArabicForm from '../../components/Form/ArabicForm';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const AddProperties = () => {
  const [language, setLanguage] = useState('english'); // State to track language selection

  const renderForm = () => {
    if (language === 'english') {
      return <Form />;
    } else if (language === 'arabic') {
      return <ArabicForm />;
    }
  };

  return (
    <div>
      <Header/>
<Form btnText = "Send"/>
    </div>
  );
};

export default AddProperties;
