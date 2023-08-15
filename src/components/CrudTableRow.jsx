/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CrudTableRow = ({ rowData, setDataToEdit, deleteData }) => {
  let { name, diagnostico, id } = rowData;

  return (
    <tr>
      <td> {name} </td>
      <td> {diagnostico} </td>
      <td>
        {" "}
        <button onClick={() => setDataToEdit(rowData)}>Editar </button>
        <button onClick={() => deleteData(id)}>Eliminar </button>{" "}
      </td>
    </tr>
  );
};

export default CrudTableRow;
