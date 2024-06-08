import Footer from '../component/Footer'

export function CodePage() {
    return(
        <>
        <div className='enter-code'>
            <h1>MYQUIZPAL</h1>
            {/* <label htmlFor="code">Enter Your Code</label> */}
            <div>
            <input type="text" id='code-input' placeholder='Enter Your Code' />
            <a href=""><button>Join</button></a>
            </div>
        </div>
        <Footer/>
        </>
    );
}