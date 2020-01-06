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

  const sorted = ( column, sortDirection, event )=> {
    console.log(sortDirection)
    // document.querySelectorAll('.rdt_TableCol_Sortable').forEach(el=>{
    //   el.classList.remove('custom-icon');
    // }) 
    if(sortDirection === 'asc'){
      document.getElementById(`column-${column.selector}`).classList.add('custom-icon');
    }else{
      document.getElementById(`column-${column.selector}`).classList.remove('custom-icon');
    }
  }

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
      onSort = {sorted}
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