import React, { useState } from "react";
import InputField from "../components/ui/input";

const Admin = () => {
  const [title, setTitle] = useState<string>("");
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
  };
  return (
    <div className="w-1/2 mx-auto">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          id="title"
          placeholder="Product Name"
          autocomplete="none"
          name="Product Name"
          setField={setTitle}
          type="name"
        />
        <InputField
          id="title"
          placeholder="Product Name"
          autocomplete="none"
          name="Product Name"
          setField={setTitle}
          type="name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Admin;
