import React, { useState } from 'react';
import { ListElement } from '../components/ListElement';
import { PButtonPure, PSpinner } from '@porsche-design-system/components-react';

const pageSize = 250;

export const TestComponentsPage1 = (): JSX.Element => {
  const [amount, setAmount] = useState(pageSize);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAmount((prevState) => prevState + 250);
    }, 1000);
  };

  return (
    <>
      {Array.from(Array(amount)).map((x, i) => (
        <ListElement key={i} text={`${i + 1}`} />
      ))}
      {isLoading ? <PSpinner /> : <PButtonPure onClick={loadMore}>Load More</PButtonPure>}
    </>
  );
};
