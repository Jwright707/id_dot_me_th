import React from 'react';
import styled from 'styled-components';
import { dateConvertion, decodingHtml, priceConvertion } from '../utils';

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

const TableHeader = styled.div`
  max-width: 166px;
  width: 100%;
  padding: 16px 0 16px 16px;
  border-bottom: 1px solid lightgray;

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
  max-width: 166px;
  width: 100%;
  margin: 0;
`;

const TableLocationWrapper = styled.div`
  max-width: 166px;
  width: 100%;
  
`;

const TableLocation = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  
`;

const TableDescription = styled.p`
  max-width: 166px;
  width: 100%;
  margin: 0;
`;

const TableCategory = styled.p`
  max-width: 166px;
  width: 100%;
  margin: 0;
`;

const TablePurchaseDate = styled.p`
  max-width: 166px;
  width: 100%;
  margin: 0;
`;

const TablePrice = styled.p`
  max-width: 166px;
  width: 100%;
  margin: 0;
`;


const Table = (props) => {
  const {data} = props;
  const headers = ['Name', 'Location', 'Purchase Date', 'Category', 'Description', 'Price']
  console.log(data)
  return (
    <TableWrapper>
      <TableHeaderWrapper>
        {headers.map((eachHeader, key) => (
          <TableHeader key={`${eachHeader}_${key}`}>
            {eachHeader}
          </TableHeader>
        ))}
      </TableHeaderWrapper>
      <TableRowWrapper>
        {data.map((rowRow) => {
          return (
            <TableRowIndividualWrapper>
              <TableName>
                {rowRow.name}
              </TableName>
              <TableLocationWrapper>
                <TableLocation
                  src={rowRow.location}
                />
              </TableLocationWrapper>
              <TablePurchaseDate>
                {dateConvertion(rowRow.purchaseDate)}
              </TablePurchaseDate>
              <TableCategory>
                {rowRow.category}
              </TableCategory>
              <TableDescription>
                {decodingHtml(rowRow.description)}
              </TableDescription>
              <TablePrice>
                {priceConvertion(rowRow.price)}
              </TablePrice>
            </TableRowIndividualWrapper>
          )
        })}
      </TableRowWrapper>
    </TableWrapper>
  )
} 

export default Table;