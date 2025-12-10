import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 14px 16px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #358585;
    box-shadow: 0 0 0 4px rgba(53, 133, 133, 0.1);
    background: #fafbfc;
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 480px) {
    padding: 12px 14px;
    font-size: 0.95rem;
  }
`;

const Search = ({ setSearchTerm }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="🔍 Buscar productos por nombre..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchContainer>
  );
};

export default Search;
