import React, { useState } from "react";

const initialForm = {
  name: "",
  diagnostico: "",
  id: null,
};

const CrudForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {
    setForm(initialForm);
  };

  return (
    <div>
      <h3> AGREGAR </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="diagnostico"
          placeholder="diagnostico"
          onChange={handleChange}
          value={form.diagnostico}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
