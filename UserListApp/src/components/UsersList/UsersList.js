import styles from "./UsersList.module.css";

import Card from "../UI/Card";

//render the aproved list of users -> your receive an array of objects {username: "", age: ""} and need to sequentially render
//starting from the last first
export default function UsersList(props) {
  function deleteUserHandler(event) {
    props.onUserDelete(event);
  }

  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} id={user.id} onClick={deleteUserHandler}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
