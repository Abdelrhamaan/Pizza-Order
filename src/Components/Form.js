import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleForm(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }
  function getNum(e) {
    console.log(e.target.value);
    // e.target.value always return string so we converted it
    setQuantity(Number(e.target.value));
  }
  return (
    <form className="add-form" onSubmit={handleForm}>
      <h3>What do you need for your trip?</h3>
      {/*<select value={quantity} onChange={(e)=>{
      console.log(e.target.value);
      setQuantity(e.target.value)}}> */}
      <select value={quantity} onChange={getNum}>
        {/* creating array from 1 to 20 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => {
          /*console.log(e.target.value)*/
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
