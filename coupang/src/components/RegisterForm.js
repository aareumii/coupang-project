import React, { useState } from "react";
import { StyledRegisterForm, StyledForm } from "./styles";

function RegisterForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    id: "",
    product: "",
    category: "",
    description: "",
    media: "./assets/img.png",
    price: 0,
    quantity: 0,
  });

  const [showCategory, setShowCategory] = useState(false);

  const categoryOption = ["빵", "디저트/케익류", "음료", "베이킹재료 및 기타"];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("제출된 데이터:", formData);
    setFormData({
      product: "",
      description: "",
      media: "",
      price: 0,
    });
    onAddItem(formData);
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
          value={formData.name}
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

        <label htmlFor="media">미디어 추가</label>
        <input
          type="file" 
          name="media"
          id="media"
          onChange={handleChange}
        />
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
        <button type="submit">저장</button>
      </StyledForm>
    </StyledRegisterForm>
  );
}

export default RegisterForm;


{/*import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import { StyledInventoryList } from "./InventoryList.styles";

function InventoryList() {
  const [items, setItems] = useState([
    {
      id: 0,
      product: "소금치즈",
      description: "트러플소금에 치즈추가",
      media:
        "https://e7.pngegg.com/pngimages/365/237/png-clipart-bread-bread.png",
      price: 3800,
      quantity: 20,
    },
    {
      id: 1,
      product: "플레인브레드",
      description: "빵",
      media:
        "https://e7.pngegg.com/pngimages/365/237/png-clipart-bread-bread.png",
      price: 1500,
      quantity: 15,
    },
    {
      id: 2,
      product: "버터",
      description: "버터",
      media:
        "https://e7.pngegg.com/pngimages/365/237/png-clipart-bread-bread.png",
      price: 500,
      quantity: 8,
    },
  ]);

  const onAddItem = (item) => {
    const newItem = { ...item, id: 100 };
    setItems((items) => [...items, newItem]);
  };

  return (
    <StyledInventoryList>
      <h4>상품 목록 및 재고관리</h4>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>미디어</th>
            <th>상품 설명</th>
            <th>가격</th>
            <th>재고관리</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.product}</td>
              <td><img src={item.media} alt={item.product} width="30" height="30" /></td>
              <td>{item.description}</td>
              <td>{item.price}원</td>
              <td>
                <div className="quantity">
                  <button>-</button>
                  <p>{item.quantity}개</p>
                  <button>+</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RegisterForm onAddItem={onAddItem} />
    </StyledInventoryList>
  );
}

export default InventoryList

*/}

