import React, { useState } from "react";
import InputField from "../components/ui/input";

const Admin = () => {
  const [title, setTitle] = useState<string>("");
  const [src, setSrc] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, src, parseInt(price));
  };
  return (
    <div className="w-1/2 mx-auto">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          id="title"
          placeholder="Product Name"
          autocomplete="none"
          name="title"
          setField={setTitle}
          type="name"
        />
        <InputField
          id="src"
          placeholder="Image link"
          autocomplete="none"
          name="src"
          setField={setSrc}
          type="name"
        />
        <InputField
          id="price"
          placeholder="0"
          autocomplete="none"
          name="price"
          setField={setPrice}
          type="number"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Admin;
