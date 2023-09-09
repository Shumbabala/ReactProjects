import React, { useState } from "react";

import AddUser from "./components/AddUser/AddUser";
import ErrorModal from "./components/UI/ErrorModal";
import UsersList from "./components/UsersList/UsersList";
import Button from "./components/Button/Button";

//constants
const ModalTitle = "An error ocurred";
const ModalContent = "Input fields incorrect!";

function App() {
  //state management
  const [userInput, setUserInput] = useState({});
  const [showErr, setShowErr] = useState(false);
  const [usersList, setUsersList] = useState([]);

  //newUserInput contains 2 field -> Username & Age
  function UserChangeHandler(newUserInput) {
    //update App.js (parent) user data (UsersList forwarding)
    setUserInput({ username: newUserInput.username, age: newUserInput.age });
  }

  function addUserHandler() {
    //add user button has been clicked, validate input fields and take action
    //check whether input fields are valid
    const user = usersList.filter(
      (user) =>
        user.username === userInput.username && user.age === userInput.age
    );
    if (userInput.age <= 0 || user.length !== 0) {
      //render modal component
      setShowErr(true);
      console.log("setShowErr given true");
    } else {
      //add userInput object to list of displayed users
      setUsersList((prevList) => [
        ...prevList,
        {
          username: userInput.username,
          age: userInput.age,
          id: Math.random().toString(),
        },
      ]);
      //reset current userInput for next incoming input
      setUserInput({});
    }
  }

  function deleteUserHandler(event) {
    //update the state of this list accordingly
    setUsersList((prevList) =>
      prevList.filter((user) => user.id !== event.target.id)
    );
  }

  function modalSelfDestruct() {
    //remove overlaying modal
    setShowErr(false);
  }

  return (
    <div>
      {showErr && (
        <ErrorModal
          heading={ModalTitle}
          content={ModalContent}
          clickHandler={modalSelfDestruct}
          children={
            <Button type="submit" clickHandler={modalSelfDestruct}>
              Okay
            </Button>
          }
        />
      )}
      <AddUser onAddUserChange={UserChangeHandler} onUserAdd={addUserHandler} />
      <UsersList users={usersList} onUserDelete={deleteUserHandler} />
    </div>
  );
}

export default App;
