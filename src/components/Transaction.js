import React, {useContext , useEffect , useState} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const [data,setData] = useState([])

  const sign = transaction.amount < 0 ? '-' : '+';

//   useEffect(()=>{
        
//     fetch("https://app-demo-new.herokuapp.com/products", {
//         method : "DELETE",

//     }).then(res => res.json())
//     .then((data) => {
//       setData(data)
//   }).catch((err) => {
//     console.log("error");
//   }) 
// })
const deleteTransaction = async(e) => {
  e.preventDefault();

  try{
    fetch("https://app-demo-new.herokuapp.com/products", {
        method : "DELETE",

    }).then(res => res.json())
    .then((data) => {
      setData(data)
  }).catch((err) => {
    console.log("error");
  }) 
  }catch (error){
    console.log(error);
}
}

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      
      {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}