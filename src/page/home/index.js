import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAdd } from "../../redux/actions/to-do/to-doActions";

const Home = () => {
  return(
    <div>
      
    </div>
  );  
};

export default Home;








// const [input,setInput]=useState('');
//   const todoSelector=useSelector((state)=>state.todo.list);
//   const todoDispatch=useDispatch();
//   console.log(todoSelector);
//   return(
//     <div>
// <div>
//   <input placeholder="wirte" onChange={(e)=>setInput(e.target.value)} />
//   <button onClick={()=>todoDispatch(todoAdd(input))} >add</button>
// </div>
// <div>
//   {
    
//   }
// </div>
//     </div>
//   );


// const [input, setInput] = useState("");
// const [list, setList] = useState([]);
// const [edititemId, setEditItemId] = useState("");
// const [editItemFound, setEditFound] = useState(false);
// const addInput = () => {
//   if (editItemFound == true) {
//     setList(
//       list.map((data) => {
//         if (edititemId.id === data.id) {
//           console.log("hello");
//           return { ...list, name: input };
//         }
//         return data;
//       })
//     );
//     setEditFound(false);
//     setInput("");
//   } else {
//     const item = { id: new Date().getTime().toString(), name: input };
//     setList([...list, item]);
//     setInput("");
//   }
// };
// //console.log(list);
// const deleteItem = (val) => {
//   const update = list.filter((data) => data.id != val);
//   setList(update);
// };
// const editItem = (val) => {
//   const dataId = list.find((item) => item.id === val);
//   setEditItemId(dataId);
//   setInput(dataId.name);
//   if (dataId) {
//     setEditFound(true);
//   }
// };
// return (
//   <div className="App">
//     <div>
//       <input
//         placeholder="write here"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={addInput}>addd</button>
//     </div>
//     <div>
//       {list.map((items) => (
//         <div style={{ display: "block" }}>
//           <text key={items.id}>{items.name}</text>
//           <button onClick={() => editItem(items.id)}>edit</button>
//           <button onClick={() => deleteItem(items.id)}>delete</button>
//         </div>
//       ))}
//     </div>
//   </div>
// );
