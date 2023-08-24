//render the aproved list of users -> your receive an array of objects {username: "", age: ""} and need to sequentially render
//starting from the last first
export default function UsersList(props) {
  function deleteUserHandler(event) {
    props.onUserDelete(event);
  }

  //using string literal for <li/> children
  return (
    <ul className="users">
      {props.users.map((user) => (
        <li key={user.id} onClick={deleteUserHandler}>
          `${user.username} (${user.age} years old)`
        </li>
      ))}
    </ul>
  );
}
