// IMPORTS
import { useState } from "react";
// LIST OF ITEMS
const titles = ["Articolo 1", "Articolo 2 ", "Articolo 3 "];

export default function Title() {
  //   useSTATE
  const [setTitle, setCurrentTitle] = useState(titles);
  const [currentIndex, setCurrentIndex] = useState("");

  //   function for form
  const inputFinder = (e) => setCurrentIndex(e.target.value);
  const inputSubmit = (e) => {
    e.preventDefault();
    setCurrentTitle([...setTitle, currentIndex]);
  };
  return (
    <div className="container-sm">
      <div className="row">
        {setTitle.map((element, index) => (
          <h2 className="col-4 text-center" key={index}>
            {element}
          </h2>
        ))}

        <form onSubmit={inputSubmit}>
          <div className="input-group mb-3 mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Inserire Input"
              aria-label="Inserire Input"
              aria-describedby="button-addon2"
              //   button Commands
              onChange={inputFinder}
              value={currentIndex}
            />
            <button className="btn btn-outline-secondary" id="button-addon2">
              Aggiungi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
