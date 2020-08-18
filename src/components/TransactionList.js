import React, { useContext , useEffect } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  useEffect(()=>{
        
    fetch("https://app-demo-new.herokuapp.com/products", {
        method : "GET",

    }).then(res => res.json())
    .then((data) => {
    console.log({data})
  }).catch((err) => {
    console.log("error");
  })
})
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => 
        (<Transaction key={transaction.id} transaction={transaction} />))
        }
        
      </ul>
    </div>
      
  )
}