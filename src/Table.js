import React, { useState, useEffect } from "react";

import DataTable from "react-data-table-component";
import axios from 'axios';

import ArrowMix from './svg/ArrowMix';

const Table = () =>{
  const [tdata, setTdata] = useState([]);
  const arrowMix = <ArrowMix/>;

  //Similar to componentDidMount
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setTdata(res.data);
    });
  },[])

  const sorted = ( column, sortDirection, event )=> {
    document.querySelectorAll('.rdt_TableCol_Sortable span').forEach(el=>{
      el.classList.remove('__rdt_custom_sort_icon__'); //to stop the default rotate property
    })
    if(sortDirection === 'asc'){//arrow down
      document.querySelector(`#column-${column.selector} span`).innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>';
    }else{
      document.querySelector(`#column-${column.selector} span`).innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#010101" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>';
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
      sortIcon = {arrowMix}
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