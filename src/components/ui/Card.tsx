import styled from 'styled-components';

interface CardProps {
  padding?: string;
  maxWidth?: string;
}

export const Card = styled.div<CardProps>`
  background-color: #fcfcfd;
  border: 1px solid #d1d4d6;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  width: 100%;
  padding: ${({ padding }) => padding || '24px'};
  max-width: ${({ maxWidth }) => maxWidth || 'unset'};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
