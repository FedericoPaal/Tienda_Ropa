import React from 'react';
import styled from 'styled-components';

const PaginationNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const PaginationList = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PageItem = styled.li`
  display: flex;
`;

const PageButton = styled.button`
  padding: 10px 14px;
  border: 2px solid ${props => props.active ? '#358585' : '#ddd'};
  background: ${props => props.active ? '#358585' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 6px;
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '500'};
  font-size: 0.95rem;
  transition: all 0.2s ease;
  min-width: 40px;
  text-align: center;

  &:hover {
    border-color: #358585;
    ${props => !props.active && `background: #f5f7fa;`}
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.85rem;
    min-width: 36px;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  // Mostrar solo algunas páginas si hay muchas
  let visiblePages = pages;
  if (totalPages > 7) {
    visiblePages = [];
    // Primera página
    visiblePages.push(1);

    // Páginas alrededor de la actual
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) visiblePages.push('...');
    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }
    if (end < totalPages - 1) visiblePages.push('...');

    // Última página
    visiblePages.push(totalPages);
  }

  return (
    <PaginationNav>
      <PaginationList>
        {visiblePages.map((page, idx) => (
          <PageItem key={idx}>
            {page === '...' ? (
              <span style={{ padding: '10px 8px', color: '#999' }}>...</span>
            ) : (
              <PageButton
                active={currentPage === page}
                onClick={() => onPageChange(page)}
              >
                {page}
              </PageButton>
            )}
          </PageItem>
        ))}
      </PaginationList>
    </PaginationNav>
  );
};

export default Pagination;
