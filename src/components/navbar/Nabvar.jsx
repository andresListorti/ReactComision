import "./nabvar.css";

export const Nabvar = () => {
  let nombre = "pepe";
  const saludar = () => {
    console.log("hola " + nombre);
  };
  return (
    <div>
      <h1 className="title">{nombre}</h1>
      <ul>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
        <button onClick={saludar}>Saludar</button>
      </ul>
    </div>
  );
};
