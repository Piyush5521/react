import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";  // Remove this line if using the new theming API
import "ag-grid-community/styles/ag-theme-material.css";  // Keep the new theme if you want to use the default


import "./App.css";
import { useMemo, useState } from "react";
import { ClientSideRowModelModule, ValidationModule, PaginationModule, ModuleRegistry, TextFilterModule, RowSelectionModule, CellClassRules, TextEditorModule, CellStyleModule } from "ag-grid-community";




ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, PaginationModule, TextFilterModule, RowSelectionModule, TextEditorModule, CellStyleModule,]);

const MyCellComponent = p => {
  return <>
    <button onClick={() => window.alert(p.value.toLocaleString())}>+</button>
    {p.value}
    </>
}

function App() {
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "BMW", model: "X5", price: 57900, electric: false },
    { make: "Audi", model: "Q7", price: 64900, electric: false },
    { make: "Mercedes", model: "GLC", price: 56000, electric: false },
    { make: "Nissan", model: "Leaf", price: 35000, electric: true },
    { make: "Chevrolet", model: "Bolt", price: 35995, electric: true },
    { make: "Hyundai", model: "Kona", price: 49000, electric: true },
    
  ]);



  const ragCellClassRules: CellClassRules = {
    "rag-green": (params) => params.value > 30000,
  };

  const defaultColDef = useMemo(() =>{
    return{
      flex: 1,
      filter: "TextFilterModule"
    }
});


  const [colDefs, setColDefs] = useState([
    { field: "make",
      cellRenderer: MyCellComponent,
     },
    { field: "model" },
    { field: "price",
      valueFormatter: p => "$" + p.value.toLocaleString(),
      cellStyle: (p) => {
        if(p.value > 35000) {
          return {backgroundColor: 'yellow', color:'black'}
        }
        return null;
      }
     },
    { field: "electric" }
  ]);




  return (
    <div className="ag-theme-material-dark" style={{ height: "500px", width:'90%', marginLeft:'auto', marginRight:'auto' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection={'multiple'}
        pagination={true}
        paginationAutoPageSize={true}
        paginationPageSize={5}
        defaultColDef={defaultColDef}
        theme="legacy" 
        modules={[
          ClientSideRowModelModule,
          ValidationModule,
          PaginationModule,
        ]}
      />
    </div>
  );
}

export default App;
