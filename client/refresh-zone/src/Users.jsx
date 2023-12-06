import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Users() {
  //   useEffect(() => {
  //     fetch("http://localhost:3000/users")
  //       .then((res) => res.json())
  //       .then((data) => setUser(data));
  //   }, []);
  //   using tansktask query
  const { isPending, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/users");
      return res.json();
    },
  });
  console.log(user);
  if (isPending) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      {user.map((u) => (
        <p key={u._id}>{u.email}</p>
      ))}
    </div>
  );
}
