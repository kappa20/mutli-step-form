export default function Add({ data, isMonth,isSelected ,titles,setTitles}) {
  // useEffect(()=>{
  
  // },titles)
  function handleSelect(e){
    // console.log(isSelected);
   
    let newSet = new Set(titles)
    if(newSet.has(data.title)){

      newSet.delete(data.title);
    }else{
      newSet.add(data.title);
      
    }
    setTitles([...Array.from(newSet)]);
  }
  return (
    <>
      <label  className={new Set(titles).has(data.title) ? 'addOnContainer selectedAdd':'addOnContainer'}>
        <label className="main">
          <input type="checkbox" onChange={handleSelect}  id='data.title'/>
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
      </label>

    </>
  );
}
