import React, { useState } from "react";

import AddUser from "./components/AddUser/AddUser";
import ErrorModal from "./components/UI/ErrorModal";
import UsersList from "./components/UsersList/UsersList";
import Button from "./components/Button/Button";

const ModalTitle = "An error ocurred";
const ModalContent = "Input fields incorrect!";

function App() {
  //state management
  const [userAdded, setUserAdded] = useState(false);
  const [userInput, setUserInput] = useState({});
  const [showErr, setShowErr] = useState(false);
  const [usersList, setUsersList] = useState([]);

  //newUserInput contains 2 field -> Username & Age
  function UserChangeHandler(newUserInput) {
    //update App.js (parent) user data (UsersList forwarding)
    setUserInput({ newUserInput });
    //reset boolean
    if (userAdded) {
      setUserAdded(false);
    }
  }

  function addUserHandler(event) {
    //add user button has been clicked, validate input fields and take action
    //check whether input fields are valid
    event.preventDefault();
    if (userInput.age <= 0 || usersList.includes(userInput)) {
      //render modal component
      setShowErr(true);
    } else {
      //add userInput object to list of displayed users
      setUsersList((prevList) =>
        prevList.unshift({ userInput, id: Math.random().toString() })
      );
      //alert child components of added user (reset input field contents)
      setUserAdded(true);
      //reset current userInput for next incoming input
      setUserInput({});
    }
  }

  function deleteUserHandler(event) {
    //update the state of this list accordingly
    setUsersList(usersList.filter((users) => users.id !== event.target.id)); //<- MAKE SURE filter() RETURNS AN ARRAY!!!
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
          children={<Button type="submit">Okay</Button>}
        />
      )}
      <AddUser
        UserAdded={userAdded}
        onAddUserChange={UserChangeHandler}
        onUserAdd={addUserHandler}
      />
      <UsersList users={usersList} onUserDelete={deleteUserHandler} />
    </div>
  );
}

export default App;
