import styled from "styled-components";

export const PurchasesMainWrapper = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const PurchaseContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1000px;
  width: 100%;
`;

export const LoadingWrapper = styled.div`
  padding-left: 16px;
`

export const PurchaseContentHeader = styled.h1`
  color: #16145a;
  padding-left: 16px;
`;

export const TableWrapper = styled.div`
  display: block; 
  padding: 0 16px;
  @media(max-width: 768px) {
    display: none;
    padding: 0;
  }
`;

export const CardWrapper = styled.div`
  display: none;
  padding: 0;
  @media(max-width: 768px) {
    display: block;
    padding: 0 16px;
  }
`;