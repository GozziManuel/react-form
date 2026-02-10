export default function Title() {
  const titles = ["Articolo 1", "Articolo 2 ", "Articolo 3 "];
  return (
    <div className="container-sm">
      <div className="row">
        {titles.map((element, index) => (
          <h2 className="col-4 text-center" key={index}>
            {element}
          </h2>
        ))}
      </div>
    </div>
  );
}
