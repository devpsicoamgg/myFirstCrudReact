import React from "react";

const CrudTableRow = ({ rowData }) => {
  return (
    <>
      <tr>
        <th> {rowData.name} </th>
        <th> {rowData.diagnostico} </th>
        <th>
          {" "}
          <button>Editar </button>
          <button>Eliminar </button>{" "}
        </th>
      </tr>
    </>
  );
};

export default CrudTableRow;
