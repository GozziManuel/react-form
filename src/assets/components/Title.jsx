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
  //   function for buttons
  const deleteOptionButton = (deleteButton) => {
    setCurrentTitle(
      setTitle.filter((element, index) => index !== deleteButton),
    );
  };

  return (
    <div className="container-sm">
      <div className="row">
        {setTitle.map((element, index) => (
          <div className="col-4 d-flex">
            <h2 className="text-center m-5" key={index}>
              {element}
            </h2>
            <div className="btncontainer">
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteOptionButton(index);
                }}
              >
                Delete
              </button>
              <button className="btn btn-primary">Change</button>
            </div>
          </div>
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
