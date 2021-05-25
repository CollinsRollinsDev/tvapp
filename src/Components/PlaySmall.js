import React, { useState, useEffect } from "react";

function PlaySmall() {
  let [data1, setData1] = useState(false);
  let [data2, setData2] = useState(false);
  let [data3, setData3] = useState(false);
  let [data4, setData4] = useState(false);
// let [stuData, setStuData] = useState([data1, data2, data3, data4])
let stuData = [data1, data2, data3, data4]
  const center = {
    textAlign: "center",
  };
  let data = {
      fontWeight:"700",
    //   height:"20px",
      backgroundColor:"red",
      padding:"2%",
      marginLeft:"20px",
      cursor:"pointer"
  }
  const bigData = {
      display: "flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"20% 5%"
  }
  const handleData1 = (e) => {
    setData1(data1 = true)
    console.log(data1)
    if(data1 == true){
      
    }
    console.log("clicked")
    // console.log(datas);
  };
  const handleData2 = () => {

  }
  const students = [
    "Bolaji Samuel",
    "Ayomide Joshua",
    "Collins Rollins",
    "Adams Smith",
  ];
  return (
    <div style={center}>
      <h3>Here is the program of switching class captain roles</h3>
      <h3>Availaible class students fit for captain role</h3>
      {students.map((student) => {
        return <h5>This is {student}</h5>;
      })}
        <div style={bigData}>
        <div key={data1}style={data} onClick={handleData1}>Bolaji Samuel</div>
      <div style={data} value={data2} onClick={handleData2}>Ayomide Joshua</div>
      <div style={data}>Collins Rollins</div>
      <div style={data}>Adams Smith</div>
        </div>
    </div>
  );
}

export default PlaySmall;
