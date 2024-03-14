import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useItemContext } from "../components/items-component/ItemContext";

const AdminPanel = () => {
  const { addItem } = useItemContext();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    ingredients: "",
    descriptions: "",
    mainImage: null as File | null,
    secondaryImage: null as File | null,
    tertiaryImage: null as File | null,
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    const file = files ? files[0] : null;
    setFormData({
      ...formData,
      [name]: file,
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      price: "",
      ingredients: "",
      descriptions: "",
      mainImage: null,
      secondaryImage: null,
      tertiaryImage: null,
    });
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const Data = new FormData();
    Data.append("name", formData.name || "");
    Data.append("price", formData.price.toString()); // Convert number to string
    Data.append("ingredients", formData.ingredients || "");
    Data.append("descriptions", formData.descriptions || "");
    if (formData.mainImage) {
      Data.append("mainImage", formData.mainImage);
    }
    if (formData.secondaryImage) {
      Data.append("secondaryImage", formData.secondaryImage);
    }
    if (formData.tertiaryImage) {
      Data.append("tertiaryImage", formData.tertiaryImage);
    }

    try {
      const response = await fetch("http://localhost:5000/add-item", {
        method: "POST",
        body: Data,
      });
      const data = await response.json();
      console.log(data);

      addItem({
        title: formData.name,
        ingredients: formData.ingredients,
        price: Number(formData.price), // Keep this conversion if needed elsewhere
        image: formData.mainImage,
        image2: formData.secondaryImage,
        image3: formData.tertiaryImage,
      });
      console.log(addItem, "admin panel");
      handleReset();
      toast.success("Item added Successfully");
    } catch (error) {
      console.error("Error adding item:", error);
      toast.error(`There is some problem`);
    }
  };

  return (
    <div>
      <ToastContainer />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
          <h1>Add Items</h1>
          <div>
            <NamePrice>
              <WidthDiv>
                <p>Item Name</p>
                <Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
              </WidthDiv>
              <WidthDiv>
                <p>Item Price</p>
                <Input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </WidthDiv>
            </NamePrice>
            <Descriptions>
              <WidthDiv>
                <p>Item Ingredients</p>
                <Input
                  type="text"
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleInputChange}
                />
              </WidthDiv>
              <WidthDiv>
                <p>Description</p>
                <textarea
                  name="descriptions"
                  value={formData.descriptions}
                  onChange={handleTextareaChange}
                ></textarea>
              </WidthDiv>
            </Descriptions>
            <ImagesDiv>
              <div>
                <p>Add Main Image</p>
                <input type="file" name="mainImage" onChange={handleFileChange} />
              </div>
              <div>
                <p>Add Secondary Image</p>
                <input type="file" name="secondaryImage" onChange={handleFileChange} />
              </div>
              <div>
                <p>Add Tertiary Image</p>
                <input type="file" name="tertiaryImage" onChange={handleFileChange} />
              </div>
            </ImagesDiv>
          </div>
          <ButtonDiv>
            <button>Submit</button>
          </ButtonDiv>
        </Form>
      </Container>
    </div>
  );
};

export default AdminPanel;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 100px;
  @media (max-width: 1150px) {
    padding: 30px 50px;
  }
  h1 {
    font-size: 35px;
    font-weight: 700;
    line-height: 41px;
    color: ${defaultTheme.colors.red};
    padding-bottom: 10px;
    border-bottom: 2px solid ${defaultTheme.colors.red};
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: ${defaultTheme.colors.red};
    margin-bottom: 5px;
  }
`;
const Input = styled.input`
  width: 400px;
  height: 50px;
  font-size: 25px;
  font-weight: 400;
  line-height: 29px;
  padding-left: 15px;
  border: 2px solid ${defaultTheme.colors.red};
  border-radius: 10px;
  background-color: ${defaultTheme.colors.floralwhite};
  color: ${defaultTheme.colors.blue};
  &:focus {
    outline: none;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const WidthDiv = styled.div`
  width: 100%;
`;
const Form = styled.form`
  width: 100%;
`;

const NamePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

const Descriptions = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;

  textarea {
    width: 400px;
    height: 150px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    padding: 10px;
    border: 0;
    border: 2px solid ${defaultTheme.colors.red};
    border-radius: 10px;
    background-color: ${defaultTheme.colors.floralwhite};
    color: ${defaultTheme.colors.blue};
    resize: vertical;
    &:focus {
      outline: none;
    }
    @media (max-width: 1000px) {
      width: 100%;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;
const ImagesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  button {
    cursor: pointer;
    font-size: 25px;
    font-weight: 400;
    line-height: 29px;
    background-color: ${defaultTheme.colors.red};
    color: ${defaultTheme.colors.floralwhite};
    border: 0;
    border-radius: 10px;
    padding: 10px 15px;
  }
`;
