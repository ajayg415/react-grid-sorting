# react-grid-sorting

# For custom sorting icon logic refer below files.

## Table.js
```
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
```

## App.css
```
.rdt_TableCol_Sortable svg{
  opacity: 1 !important;
}
```