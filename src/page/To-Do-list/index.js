import React, { useState } from "react";

const ToDoList = () => {
  const [inputData, SetinputData] = useState("");
  const [list, SetList] = useState([]);
  const [editItem, setEditItem] = useState("");
  const [editfound, setEditFound] = useState(false);
  //console.log(list);

  const addClickItem = () => {
    if (editfound == true) {
      SetList(
        list.map((data) => {
          if (data.id === editItem.id) {
              console.log("iinside");
            return { ...data, name: inputData };
        }
          return data;
        })
      );
      setEditFound(false);
      SetinputData("");
    } else {
      const addtoList = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      SetList([...list, addtoList]);
      SetinputData("");
    }
  };

  const deleteItem = (ele) => {
    const updated = list.filter((data) => data.id != ele);
    SetList(updated);
  };

  const handleChange = (ele) => {
    const gotItem = list.find((data) => data.id === ele);
    SetinputData(gotItem.name);
    setEditItem(gotItem);
    setEditFound(true);
  };

  return (
    <div>
      <input
        placeholder="write note"
        value={inputData}
        onChange={(e) => SetinputData(e.target.value)}
      />
      <button onClick={addClickItem}>add</button>

      <div>
        {list.map((data) => (
          <div style={{ display: "block" }}>
            <text key={data.id}>{data.name}</text>
            <button onClick={()=>handleChange(data.id)} >edit</button>
            <button onClick={() => deleteItem(data.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
