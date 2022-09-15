import React, { useEffect, useState } from 'react';
import { PurchasesMainWrapper, PurchaseContentWrapper, PurchaseContentHeader } from './purchasesStyledComponents';
import { 
  PurchasesConstants as constants,
} from '../assets/constants/purchasesConstants';
import Table from '../components/table';

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
        {purchases && (
          <Table data={purchases}/>
        )}
      </PurchaseContentWrapper>
    </PurchasesMainWrapper>
  )
}

export default Purchases;