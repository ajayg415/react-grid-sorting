# react-grid-sorting

# For custom sorting icon logic refer below files.

## Table.js
```
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
```

## App.css
```
.rdt_TableCol_Sortable span{
  opacity: 1;
  transform: rotate(0deg);
}
.custom-icon.rdt_TableCol_Sortable span{
  transform: rotate(180deg);
}
```