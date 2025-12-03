import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

export const ProductCard = styled.div`
  background: rgb(171, 186, 202);
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 8px;
  }

  h4 {
    font-size: 14px;
    min-height: 36px;
    color: #143b79;
  }

  .price {
    font-weight: 700;
    margin: 8px 0;
    color: #0b2f6b;
  }

  button {
    padding: 8px 10px;
    border: none;
    border-radius: 6px;
    background: #358585; /* --accent */
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      background: #0b8f8f;
    }
  }
`;
