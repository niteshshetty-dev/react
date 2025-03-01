import { useEffect, useState } from "react";
import "./_ToDo.scss";

function ToDoComponent() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [editI, setEditI] = useState(null);
  const [editV, setEditV] = useState();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
  }, [list]);

  function handleList() {
    setList((prevState) => [
      ...prevState,
      { id: Date.now(), item: item.trim() },
    ]);
    setItem("");
  }

  function handleDelete(id) {
    setList((prevState) => prevState.filter((ele) => ele.id !== id));
    if (editI !== null) {
      setEditI(null);
    }
  }

  function handleEdit(i, item) {
    setEditI(i);
    setEditV(item);
  }

  function saveEdit() {
    if (editV.trim() === "") {
      handleDelete(editI);
    } else {
      setList((prevState) =>
        prevState.map((ele) =>
          ele.id === editI ? { ...ele, item: editV.trim() } : ele
        )
      );
      setEditI(null);
      setEditV("");
    }
  }

  return (
    <div>
      <div className="ToDo-container">
        <div className="title-container">
          <h1>To-Do List</h1>
        </div>
        <div className="list-container">
          <div className="input-group mb3">
            <input
              className="form-control no-border"
              aria-describedby="button-addon2"
              value={item}
              type="text"
              placeholder="Tasks to do"
              onChange={(e) => setItem(e.target.value)}
            ></input>
            <button
              id="button-addon2"
              className="btn btn-outline-secondary"
              onClick={handleList}
              disabled={item.trim() === ""}
            >
              Add
            </button>
          </div>
          <div className="list-item">
            {list.length > 0 ? (
              <ul>
                {list.map((ele) => {
                  return (
                    <div className="row" key={ele.id}>
                      {editI === ele.id ? (
                        <>
                          <input
                            type="text"
                            className="edit-input col-6"
                            value={editV}
                            onChange={(e) => setEditV(e.target.value)}
                          />
                          <button
                            type="button"
                            className="btn btn-danger m-1 col-2"
                            onClick={saveEdit}
                          >
                            <i className="fa fa-check"></i>
                          </button>
                        </>
                      ) : (
                        <>
                          <li className="col-6">
                            <p> {ele.item} </p>
                          </li>
                          <button
                            type="button"
                            className="btn btn-danger m-1 col-2"
                            onClick={() => handleEdit(ele.id, ele.item)}
                          >
                            <i className="fa fa-edit"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger m-1 col-2"
                            onClick={(e) => handleDelete(ele.id)}
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </>
                      )}
                    </div>
                  );
                })}
              </ul>
            ) : (
              <span>No tasks yet</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoComponent;
