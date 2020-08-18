import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

//   useEffect(()=>{
        
//     fetch("https://app-demo-new.herokuapp.com/products", {
//         method : "GET",

//     }).then(res => res.json())
//     .then((data) => {
//     console.log({data})
//   }).catch((err) => {
//     console.log("error");
//   })
// })

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}