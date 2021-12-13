import React, { useState } from "react";
import InputField from "../components/ui/input";
import SelectField from "../components/ui/select";
import { subcategoryEnum } from "../constants/subcategory";
import { createProduct } from "../firebase/products/createProduct";
import {
  timeStampFromInputTimeDateLocal,
  timestampGenerator,
} from "../firebase/utils/timestamp";

const Admin = () => {
  const [title, setTitle] = useState<string>("");
  const [src, setSrc] = useState<string>("");
  const [price, setPrice] = useState<string>("0");
  const [date, setDate] = useState<string>("");
  const [subcategory, setSubcategory] = useState<string>("laptops");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, src, price, date);
    const timeObj = timeStampFromInputTimeDateLocal(date);

    const { day, month, timezone, year } = timeObj;

    const firebaseTimestamp = timestampGenerator(
      month,
      day,
      year,
      timezone,
      timeObj.time
    );

    console.log(firebaseTimestamp);
    createProduct({
      title,
      price: parseInt(price),
      subcategory: "phones",
      brand: "Google",
      date,
      specs: { cpu: "snapdragon" },
    });
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
        <InputField
          id="date"
          placeholder=""
          autocomplete="none"
          name="releaseDate"
          setField={setDate}
          type="date"
        />
        <SelectField
          name="subcategory"
          options={subcategoryEnum}
          labelTitle="subcategory"
          id="subcategory"
          setField={setSubcategory}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Admin;
