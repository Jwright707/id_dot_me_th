import React from 'react';
import styled from 'styled-components';
import { capitalizingText, categoryTextColors, categoryColors, dateConvertion, decodingHtml, priceConvertion } from '../utils';

const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
`;

const TableHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
`;

const TableHeader = styled.h4`
  max-width: 166px;
  width: 100%;
  padding: 16px 0 16px;
  border-bottom: 1px solid lightgray;
  margin: 0;
  padding-left: ${p => p.index === 0 ? '16px' : '0px'}
`;

const TableRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const TableRowIndividualWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 16px 0 24px 16px;
`;

const TableName = styled.p`
  max-width: 150px;
  padding-right: 16px;
  width: 100%;
  margin: 0;
  font-weight: bold;
`;

const TableLocationWrapper = styled.div`
  max-width: 150px;
  padding-right: 16px;
  width: 100%;
  
`;

const TableLocation = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  
`;

const TableDescription = styled.p`
  max-width: 150px;
  padding-right: 16px;
  width: 100%;
  margin: 0;
`;

const TableCategoryWrapper = styled.div`
  max-width: 150px;
  padding-right: 16px;
  width: 100%;
  margin: 0;
  text-align: center;
`;

const TableCategory = styled.p`
  height: 25px;
  margin: 0;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${p => categoryColors[p.categoryType]};
  color: ${p => categoryTextColors[p.categoryType]};
  font-weight: bold;
`;

const TablePurchaseDate = styled.p`
  max-width: 150px;
  padding-right: 16px;
  width: 100%;
  margin: 0;
`;

const TablePrice = styled.h4`
  max-width: 100px;
  padding-right: 16px;
  width: 100%;
  margin: 0;
`;

const TableButtonWrapper = styled.div`
  max-width: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TableButton = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const TableButtonDot = styled.div`
  background: gray;
  width: 5px;
  height: 5px;
  border-radius: 10px;  
`;


const Table = (props) => {
  const { data, headers } = props;
  return (
    <TableWrapper>
      <TableHeaderWrapper>
        {headers.map((eachHeader, key) => (
          <TableHeader index={key} key={`${eachHeader}_${key}`}>
            {eachHeader}
          </TableHeader>
        ))}
      </TableHeaderWrapper>
      <TableRowWrapper>
        {data.map((rowRow, key) => (
          <TableRowIndividualWrapper key={`${rowRow}_${key}`}>
            <TableName>
              {capitalizingText(rowRow.name)}
            </TableName>
            <TableLocationWrapper>
              <TableLocation
                src={rowRow.location}
              />
            </TableLocationWrapper>
            <TablePurchaseDate>
              {dateConvertion(rowRow.purchaseDate)}
            </TablePurchaseDate>
            <TableCategoryWrapper>
              <TableCategory categoryType={rowRow.category}>
                {rowRow.category}
              </TableCategory>
            </TableCategoryWrapper>
            <TableDescription>
              {decodingHtml(rowRow.description)}
            </TableDescription>
            <TablePrice>
              {priceConvertion(rowRow.price)}
            </TablePrice>
            <TableButtonWrapper>
              <TableButton>
                <TableButtonDot/>
                <TableButtonDot/>
                <TableButtonDot/>
              </TableButton>
            </TableButtonWrapper>
          </TableRowIndividualWrapper>
        ))}
      </TableRowWrapper>
    </TableWrapper>
  )
} 

export default Table;