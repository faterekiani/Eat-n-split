import { useState } from "react";
import Button from "./Button";

// show bill form
export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  // for disabled input
  const paiedByFriend = bill ? bill - paidByUser : "";

  function onSubmit(e) {
    e.preventDefault();
    if ((!bill, !paidByUser)) return;
    onSplitBill(whoIsPaying === "user" ? paiedByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={onSubmit}>
      <h2>split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>

      <label>👩 Your expense</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      ></input>

      <label>👩‍❤️‍👩 {selectedFriend.name}'s expense</label>
      <input type="text" value={paiedByFriend} disabled></input>

      <label>🤑 who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
