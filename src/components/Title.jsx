// IMPORTS
import { useState } from "react";
// LIST OF ITEMS
const titles = ["Articolo 1", "Articolo 2 ", "Articolo 3 "];

export default function MainApp() {
  //   useSTATE
  const [title, SetTitle] = useState(titles);
  const [currentIndex, setCurrentIndex] = useState("");

  // Toggling Change button
  const [editTitle, setEditTitle] = useState("");

  // State For changing Title
  const [editTitleIndex, setEditTitleIndex] = useState(null);
  const editedTitle = title[editTitleIndex];

  // Function to declare wich Article
  const changingTitle = (EditIndex) => {
    setEditTitleIndex(EditIndex);
    setEditTitle(title[EditIndex]);
  };

  // Function to edit Form
  const editFormFunction = (e) => {
    e.preventDefault();
    const uptadedTitle = title.map((element, index) =>
      index === editTitleIndex ? editTitle : element,
    );
    SetTitle(uptadedTitle);
    setEditTitleIndex(null);
  };
  //   function for form
  const inputFinder = (e) => setCurrentIndex(e.target.value);
  const inputSubmit = (e) => {
    e.preventDefault();
    SetTitle([...title, currentIndex]);
  };
  //   function for deletebuttons
  const deleteOptionButton = (deleteButton) => {
    SetTitle(title.filter((element, index) => index !== deleteButton));
  };

  return (
    <div className="container-sm">
      <div>
        <div className="row">
          {title.map((element, index) => (
            <div className="col-4 d-flex " key={index}>
              <h2 className="text-center m-5">{element}</h2>
              <div className="btncontainer">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteOptionButton(index);
                  }}
                >
                  Delete
                </button>
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={() => changingTitle(index)}
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

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

        {editedTitle && (
          <form className="input-group mb-3" onSubmit={editFormFunction}>
            <h2>Modifica {editedTitle}: </h2>
            <input
              // Button Commands
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Change Title"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-primary">Change</button>
          </form>
        )}
      </div>
    </div>
  );
}
