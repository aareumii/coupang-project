import React, { useState } from "react";
import { StyledRegisterForm, StyledForm } from "./styles";

function RegisterForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    id: "",
    product: "",
    category: "",
    description: "",
    media1: "",
    media2: "",
    media3: "",
    price: 0,
    quantity: 0,
    registrationDate: "",
    endDate: "",
  });

  const [showCategory, setShowCategory] = useState(false);

  const categoryOption = ["빵", "디저트/케익류", "음료", "기타"];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("제출된 데이터:", formData);
    setFormData({
      id: "",
      product: "",
      category: "",
      description: "",
      media1: "",
      media2: "",
      media3: "",
      price: 0,
      quantity: 0,
      registrationDate: "",
      endDate: "",
    });
    onAddItem(formData);
    console.log("새로추가된 상품:",formData);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [evt.target.name]: evt.target.value });

    if (name === "product" && value.trim() !== "") {
      setShowCategory(true);
    } else {
      setShowCategory(false);
    }
  };

  return (
    <StyledRegisterForm>
      <h4>상품 추가</h4>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="product">상품 이름</label>
        <input
          type="text"
          placeholder="앙버터 크로와상"
          name="product"
          value={formData.product}
          id="product"
          onChange={handleChange}
        />
        {showCategory && (
          <div>
            <label htmlFor="category">카테고리 선택</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={(e) => {
                setFormData({ ...formData, category: e.target.value });
              }}
            >
              <option value="">카테고리를 선택하세요</option>
              {categoryOption.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        <label htmlFor="description">설명</label>
        <input
          type="text"
          placeholder="화덕에서 구운 빵"
          name="description"
          value={formData.description}
          id="description"
          onChange={handleChange}
        />
        <div className="media-inputs">
          <label htmlFor="media1">미디어추가</label>
          <input
            type="file"
            name="media1"
            id="media1"
            onChange={handleChange}
          />
          <label htmlFor="media2"></label>
          <input
            type="file"
            name="media2"
            id="media2"
            onChange={handleChange}
          />
          <label htmlFor="media3"></label>
          <input
            type="file"
            name="media3"
            id="media3"
            onChange={handleChange}
          />
        </div>

        <label htmlFor="price">가격</label>
        <input
          type="number"
          placeholder=""
          name="price"
          value={formData.price}
          id="price"
          onChange={handleChange}
        />
        <label htmlFor="quantity">수량</label>
        <input
          type="number"
          placeholder=""
          name="quantity"
          value={formData.quantity}
          id="quantity"
          onChange={handleChange}
        />
        <label htmlFor="registrationDate">상품등록일</label>
        <input
          type="date"
          placeholder=""
          name="registrationDate"
          value={formData.registrationDate}
          id="registrationDate"
          onChange={handleChange}
        />
        <label htmlFor="endDate">판매종료일</label>
        <input
          type="date"
          placeholder=""
          name="endDate"
          value={formData.endDate}
          id="endDate"
          onChange={handleChange}
        />
        <button type="submit">저장</button>
      </StyledForm>
    </StyledRegisterForm>
  );
}

export default RegisterForm;
