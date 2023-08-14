import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Ana López García",
    diagnostico: "F412-Trastorno mixto de ansiedad y depresión",
  },
  { id: 2, name: "Carlos Pérez Rodríguez", diagnostico: "F32-Depresión" },
  {
    id: 3,
    name: "María Martínez Ruiz",
    diagnostico: "F41-Trastornos de ansiedad",
  },
  {
    id: 4,
    name: "Luis González Fernández",
    diagnostico: "F40-Trastornos fóbicos y de ansiedad generalizada",
  },
  {
    id: 5,
    name: "Laura Hernández López",
    diagnostico: "F33-Trastorno depresivo recurrente",
  },
  {
    id: 6,
    name: "Eduardo Rodríguez Pérez",
    diagnostico: "F43-Reacciones al estrés grave y trastornos de adaptación",
  },
  {
    id: 7,
    name: "Isabel García Martínez",
    diagnostico: "F45-Trastornos somatomorfos",
  },
  {
    id: 8,
    name: "Juan López Sánchez",
    diagnostico: "F60-Trastornos de personalidad",
  },
  { id: 9, name: "Sofía Pérez Ramírez", diagnostico: "F31-Trastorno bipolar" },
  {
    id: 10,
    name: "Diego Martínez Jiménez",
    diagnostico: "F44-Trastornos disociativos",
  },
];
const CrudApp = () => {
  const [db, setDb] = useState(initialDb);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {};
  const updateData = (data) => {};
  const deleteData = (id) => {};

  return (
    <div>
      <h2> CRUD APP </h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default CrudApp;
