export default function Info(){
    return (
        <form id='infoForm'>
            <div className='inputContainer'>
                <label for='name' >
                    Name
                </label>
                <input id='name' required type='text' placeholder="e.g:John Doe" />
                <label className='errorLabel'>This field is required</label>
                
            </div>
            <div className='inputContainer'>
                <label for='email'>
                    Email
                </label>
                <input id='email' required type='email' placeholder="e.g:Example@gmail.com" />
                <label className='errorLabel'>This field is required</label>

            </div>
            <div className='inputContainer'>
                <label for='phone'>
                    Phone Number
                </label>
                <input id='phone' required type='text' pattern="\+[\d\s]+" placeholder="e.g:+1 234 567 890" />
                <label className='errorLabel'>This field is required</label>
           
            </div>
        </form>
    );
}