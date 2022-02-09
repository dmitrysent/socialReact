const Codemu = () => {
  const obj = { name: "john", surname: "smit" };
  return (
    <div>
      <p>
        {" "}
        name: <span>{obj.name}</span>, <br /> surname:{" "}
        <span>{obj.surname}</span>
      </p>
    </div>
  );
};

export default Codemu;
