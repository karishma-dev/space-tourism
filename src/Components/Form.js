// components/Form.js
import React, { useState } from "react";
import FileSelector from "./FileSelector";

// Collect the information of a pet and manage as a state
// and mint the NFT based on the information.
const Form = () => {
  const [pet, setPet] = useState({});

  // Helper functions to be passed to input elements' onChange.

  const setName = (event) => {
    const name = event.target.value;
    setPet({ ...pet, name });
  };

  const setBreed = (event) => {
    const breed = event.target.value;
    setPet({ ...pet, breed });
  };

  const setAge = (event) => {
    const age = event.target.value;
    setPet({ ...pet, age });
  };

  return (
    <div style={style}>
      <form>
        <div className="row">
          <FileSelector pet={pet} setPet={setPet} />
          <div>
            <label for="nameInput">Pet's name</label>
            <input
              className="u-full-width"
              type="text"
              placeholder="Max"
              id="nameInput"
              onChange={setName}
            />
          </div>
          <div>
            <label for="breedInput">Breed</label>
            <select
              className="u-full-width"
              id="breedInput"
              onChange={setBreed}
            >
              <option value="Labrador">Labrador</option>
              <option value="Bulldog">Bulldog</option>
              <option value="Poodle">Poodle</option>
            </select>
          </div>
          <div>
            <label for="ageInput">Age</label>
            <select className="u-full-width" id="ageInput" onChange={setAge}>
              {[...Array(10).keys()].map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
          </div>
        </div>
        <input className="button-primary" type="submit" value="Mint" />
      </form>
    </div>
  );
};

const style = {
  padding: "5rem",
  background: "white",
  maxWidth: 350,
};

export default Form;
