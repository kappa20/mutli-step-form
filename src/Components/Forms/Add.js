export default function Add({ data, isMonth }) {
  return (
    <>
      <div className="addOnContainer">
        <label className="main">
          <input type="checkbox"  />
          <span className="geekmark"></span>
        </label>

        <div>
          <span>{data.title}</span>
          <p>{data.description}</p>
        </div>
        
        <span>
          {isMonth
            ? "+$" + data.price.month + "/mo"
            : "+$" + data.price.year + "/yr"}
        </span>
      </div>
    </>
  );
}
