import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        {user.picture && (
          <Image
            src={`${user.picture}`}
            alt={`${user.picture}`}
            width="128"
            height="128"
          />
        )}

        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
