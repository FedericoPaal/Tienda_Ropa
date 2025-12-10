import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }
`;

export const ProductCard = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(53, 133, 133, 0.15);
    border-color: #358585;
  }

  /* Imagen Container */
  .image-container {
    width: 100%;
    height: 200px;
    background: linear-gradient(135deg, #f5f7fa 0%, #eff3f7 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
  }

  img {
    width: 140px;
    height: 140px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  /* Content Container */
  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
  }

  h3 {
    font-size: 0.95rem;
    font-weight: 600;
    color: #143b79;
    margin: 0;
    line-height: 1.3;
    min-height: 40px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .price-section {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .price {
    font-weight: 700;
    font-size: 1.3rem;
    color: #358585;
    margin: 0;
  }

  .original-price {
    font-size: 0.85rem;
    color: #999;
    text-decoration: line-through;
  }

  .rating {
    font-size: 0.9rem;
    color: #666;
    margin: 0;
  }

  /* Buttons Container */
  .buttons {
    display: flex;
    gap: 8px;
    margin-top: auto;
    flex-wrap: wrap;
  }

  button {
    flex: 1;
    min-width: 80px;
    padding: 10px 12px;
    border: none;
    border-radius: 6px;
    background: #358585;
    color: white;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.2s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #0b8f8f;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  button a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
  }

  @media (max-width: 480px) {
    .image-container {
      height: 150px;
    }

    img {
      width: 100px;
      height: 100px;
    }

    .content {
      padding: 12px;
      gap: 10px;
    }

    h3 {
      font-size: 0.85rem;
      min-height: 35px;
    }

    .price {
      font-size: 1.1rem;
    }

    button {
      font-size: 0.75rem;
      padding: 8px 10px;
      min-width: 70px;
    }
  }
`;
