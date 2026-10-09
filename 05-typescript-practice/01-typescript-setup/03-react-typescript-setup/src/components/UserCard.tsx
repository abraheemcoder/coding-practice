interface UserCardProps {
  name: string;
  age: number;
  isOnline: boolean;
}

function UserCard({
  name,
  age,
  isOnline,
}: UserCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </article>
  );
}

export default UserCard;