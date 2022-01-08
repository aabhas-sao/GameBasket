import React, { useState } from "react";
import CustomFields from "../components/admin/customFields";
import InputField from "../components/ui/input";
import SelectField from "../components/ui/select";
import Spacer from "../components/ui/spacer";
import { subcategoryEnum } from "../constants/subcategory";
// import { createProduct } from "../firebase/products/createProduct";

const Admin = () => {
  const [title, setTitle] = useState<string>("");
  const [src, setSrc] = useState<string>("");
  const [price, setPrice] = useState<string>("0");
  const [date, setDate] = useState<string>("");
  const [subcategory, setSubcategory] = useState<string>("laptops");
  const [brand, setBrand] = useState<string>("");
  const [customFields, setCustomFields] = useState<{ [index: string]: string }>(
    {}
  );

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, src, price, date, subcategory, brand);
    console.log(customFields);

    console.log("create product");
    // createProduct({
    //   title,
    //   price: parseInt(price),
    //   subcategory,
    //   brand,
    //   date,
    //   specs: { cpu: "snapdragon" },
    // });
  };
  const vs = 4;
  return (
    <div className="w-4/5 md:w-1/2 mx-auto">
      <h1 className="mb-2 font-semibold">Add Product</h1>
      <form className="" onSubmit={handleSubmit}>
        <InputField
          id="title"
          placeholder="Product Name"
          autocomplete="none"
          name="title"
          setField={setTitle}
          type="name"
        />
        <Spacer px={vs} />
        <InputField
          id="src"
          placeholder="Image link"
          autocomplete="none"
          name="src"
          setField={setSrc}
          type="name"
        />
        <Spacer px={vs} />
        <InputField
          id="price"
          placeholder="0"
          autocomplete="none"
          name="price"
          setField={setPrice}
          type="number"
        />
        <Spacer px={vs} />
        <InputField
          id="date"
          placeholder=""
          autocomplete="none"
          name="releaseDate"
          setField={setDate}
          type="date"
        />
        <Spacer px={vs} />
        <InputField
          id="brand"
          placeholder=""
          autocomplete="none"
          name="brand"
          setField={setBrand}
          type="name"
        />
        <Spacer px={vs} />
        <SelectField
          name="subcategory"
          options={subcategoryEnum}
          labelTitle="subcategory"
          id="subcategory"
          setField={setSubcategory}
        />
        <Spacer px={vs} />
        <CustomFields items={customFields} setCustomFields={setCustomFields} />
        <Spacer px={vs} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Admin;
