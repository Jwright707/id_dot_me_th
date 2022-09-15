import React, { useEffect, useState } from 'react';
import { PurchasesMainWrapper, CardWrapper, PurchaseContentWrapper, PurchaseContentHeader, TableWrapper, LoadingWrapper } from './purchasesStyledComponents';
import { 
  PurchasesConstants as constants, purchasesHeaders,
} from '../assets/constants/purchasesConstants';
import Table from '../components/table';
import Cards from '../components/cards';

const Purchases = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch('https://idme-interview.herokuapp.com/')
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        setPurchases(res);
      })
  }, [])

  return (
    <PurchasesMainWrapper>
      <PurchaseContentWrapper>
        <PurchaseContentHeader>
          {constants['purchases.content.header']}
        </PurchaseContentHeader>
        {purchases.length > 0 ? (
          <>
            <TableWrapper>
              <Table data={purchases} headers={purchasesHeaders}/>
            </TableWrapper>
            <CardWrapper>
              <Cards data={purchases}/>
            </CardWrapper>
          </>
        ) :( 
            <LoadingWrapper>
              Loading...
            </LoadingWrapper>
          )
          }
      </PurchaseContentWrapper>
    </PurchasesMainWrapper>
  )
}

export default Purchases;