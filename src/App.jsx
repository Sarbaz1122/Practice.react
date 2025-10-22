import react,{useState} from 'react'


function Light(){









  
  const [light,setLight] = useState(false)

  // <!--Example 2-->
  const [text, setText] = useState("");


  //// ASSIGNMENT 1 
  /// TO CREATE A LIKE BUTTON
  const [like, setLike] = useState(0);
const onhandleLike = () => {
  setLike(like + 1);
}

// ASSIGNMENT 2
// TO CREATE A TOGGLE button
const[toggle,setToggle] = useState(false);
const onhandleToggle = () => {
  setToggle(!toggle);
}

  {/* /// ASSIGNMENT 3
      // TO CREATE temperature converter */}

      const [celsius, setCelsius] = useState(25);
      const [fahrenheit, setFahrenheit] = useState(77);
      const handlerCelsius = (e) => {
        setCelsius(e.target.value);
        setFahrenheit((e.target.value * 9) / 5 + 32);
        };
        const handlerFahrenheit = (e) => {
        setFahrenheit(e.target.value);
        setCelsius(((e.target.value - 32) * 5) / 9);
      
        
      }

      /// ASSIGNMENT 4
      // TO CREATE a TextMirror
      const [textMirror, setTextMirror] = useState("");
      const handlerMirror = (e) => {
        setTextMirror(e.target.value);
      };

      

/// ASSIGNMENT 5
// TO CREATE a TOGGLE MESSAGE

const [show, setShow] = useState(false);

  function toggleMessage() {
    setShow(!show); // flip true ↔ false
  }



   const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return(


    <div  style={{
      backgroundColor: darkMode ? 'black' : 'white',
      color: darkMode ? 'white' : 'black',
      height: '100vh',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: '50px'
    }} >
      <button onClick={() => setLight(!light)}>Toggle Light</button>
      {light ? <h1>Light ON</h1> : <h1>Light OFF</h1>}

  {/* // <!--Example 2--> */}


      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>




{/*       
  //// ASSIGNMENT 1 
  /// TO CREATE A LIKE BUTTON */}

      <h2>You have {like} likes ❤️</h2>
      <button onClick={onhandleLike}>Like</button>

      {/* <p>{like}</p> */}

{/* 
      /// ASSIGNMENT 2
      // TO CREATE A TOGGLE button */}
      <button onClick={onhandleToggle}>{toggle ? "ON" : "OFF"}</button>

      {/* /// ASSIGNMENT 3
      // TO CREATE temperature converter */}
      <br></br>

      <input type="number" value={celsius} onChange={handlerCelsius} />
      <input type="number" value={fahrenheit} onChange={handlerFahrenheit} />

      <br></br>

      {/* /// ASSIGNMENT 4
      // TO CREATE a TextMirror */}
      <input type="text" value={textMirror} onChange={handlerMirror} />
      <p>{textMirror}</p>
{/* 

/// ASSIGNMENT 5
// TO CREATE a TOGGLE MESSAGE */}
      
    <button onClick={toggleMessage}>
        {show ? 'Hide Message' : 'Show Message'}
      </button>
      {show && <h3>Hello React!</h3>}




       <div style={{
      backgroundColor: darkMode ? 'black' : 'white',
      color: darkMode ? 'white' : 'black',
      height: '20vh',
      textAlign: 'center',
      paddingTop: '10px',
      borderRadius: '20px'
    }}>
      <h1>{darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}</h1>
      <button onClick={toggleTheme}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
    </div>
  )  
}

export default Light

