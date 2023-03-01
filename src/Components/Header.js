export default function Header({data}){
    return (
        <div id='stepDesc'>
                <h1 >
                {data.title}
                </h1>
                <p>
                  {data.description}
                </p>
            </div>
    );
}