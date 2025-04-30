import { useEffect, useState } from "react";

function User() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setList(data));
  });

  return (
    <>
      <div>
        <ul>
          {list.map((item, i) => (
            <li key={i}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default User;
