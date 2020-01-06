import React, { useState, useEffect } from "react";

import DataTable from "react-data-table-component";
import axios from 'axios';


const Table = () =>{
  const [tdata, setTdata] = useState([]);

  //Similar to componentDidMount
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setTdata(res.data);
    });
  },[])

  const handleClick = (obj) => {
    const data = [...tdata]
    data.forEach((o)=>{
      if(obj.id === o.id){
        o.selected = true;
      }else{
        o.selected = false;
      }
    })
    setTdata(data);
  }

  const conditionalRowStyles = [
    {
      when: row => row.selected,
      style: {
        backgroundColor: '#d7d7d7',
      },
    },
    {
      when: row => row.haveBold,
      style: {
        fontWeight: 'bold'
      }
    },
    {
      when: row => row.haveBorder,
      style: {
        borderBottom: '1px solid black'
      }
    }
  ]

  const columns = [
    { name: "Name", selector: "name", sortable: true },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      cell: row => <Email row={row} />
    },
    {
      name: "Mobile",
      selector: "phone",
      sortable: true,
      cell: row => <Tellno row={row} />
    },
    {
      name: "Address",
      selector: "address",
      sortable: true,
      maxWidth: "250px",
      cell: row => <Address row={row} />
    }
  ];

  return (
    <DataTable
      title="Movie List"
      columns={columns}
      data={tdata}
      fixedHeader
      dense
      fixedHeaderScrollHeight="300px"
      highlightOnHover
      className='testing-component'
      onRowClicked = {handleClick}
      conditionalRowStyles={conditionalRowStyles}
    />
  );
}


const Address = data => {
  const address = data.row.address || {};
  return `${address.suite || ''}, ${address.street || ''}, ${address.city || ''}`;
}

const Tellno = data => {
  const num = data.row.phone;
  return <a href={`tel:${num}`}>{num}</a>;
}

const Email = data => {
  const email = data.row.email;
  return <a href={`mailto:${email}`}>{email}</a>;
};



export default Table;