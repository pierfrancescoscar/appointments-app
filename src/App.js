import List from './components/List';
import data from './data';
import {useState} from "react";

function App() {
const [people, setPeople] = useState(data);

const removeItem = (id) => {
  setPeople((oldValue) => oldValue.filter((value) => value.id !== id));
};

const reloadAllItem = () => {
  setPeople(data);
};

  return (
    <div className="App">
      <div className='container rounded shadow mt-5 p-3 bg-white'>
        {/* Title */}
        <h3 className="d-flex justify-content-center my-3">Appointments App</h3>

        {/* People List */}
        <div>

          <List data={people} removeItem={removeItem} />

        </div>

        {/* Buttons */}
        <div className='btn-group'>

          <button className="btn btn-reset" onClick={reloadAllItem}>
              {" "}
              Reload{" "}
          </button>

          <button className="btn btn-delete" onClick={() => setPeople([])}>
            {" "}
            Delete all
          </button>

        </div>

      </div>
    </div>
  );
}

export default App;
