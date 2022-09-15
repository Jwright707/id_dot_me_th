import React from 'react';
import styled from 'styled-components';
import { PurchasesConstants as constants } from '../assets/constants/purchasesConstants';
import { capitalizingText, dateConvertion, decodingHtml, priceConvertion } from '../utils';

const CardWrapper = styled.div`
  width: 100%;
`;

const CardIndividualWrapper = styled.div`
  margin: 8px 0px;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
`;

const CardTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardImageHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding-right: 8px;
`;

const CardImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const CardHeader = styled.h4``;

const CardPrice = styled.h3``;

const CardDescription = styled.p`
  margin-top: 0;
`;

const CardBottomWrapper = styled.div``;

const CardPurchaseDate = styled.h4`
  margin: 0;
`

const CardDate = styled.p`
  margin: 0;
`;


const Cards = (props) => {
  const { data } = props;
  return (
    <CardWrapper>
      {data.map((cardData, key) => (
        <CardIndividualWrapper key={`${cardData}_${key}`}>
          <CardTopWrapper>
            <CardImageHeaderWrapper>
              <CardImage 
                src={cardData.location}
              />
              <CardHeader>
                {capitalizingText(cardData.name)}
              </CardHeader>
            </CardImageHeaderWrapper>
            <CardPrice>
              {priceConvertion(cardData.price)}
            </CardPrice>
          </CardTopWrapper>
          <CardDescription>
            {decodingHtml(cardData.description)}
          </CardDescription>
          <CardBottomWrapper>
            <CardPurchaseDate>
              {constants['purchases.content.card.purchase.date']}
            </CardPurchaseDate>
            <CardDate>
              {dateConvertion(cardData.purchaseDate)}
            </CardDate>
          </CardBottomWrapper>
        </CardIndividualWrapper>
      ))}
    </CardWrapper>
  )
}

export default Cards;