import ReactDOM from 'react-dom/client';
let clr={
  color:'green',
  fontSize:'1.5em'
}
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
<>
<h1 style={{color:'red'}}> inline css</h1>
<p style={clr}>
      React is a JavaScript library for building user interfaces.
React is used to build single-page applications.<br></br>
React allows us to create reusable UI components.
React is a <span>JavaScript</span> library for building user interfaces.<br></br>
React is used to build single-page applications.
React allows us to create reusable UI components.
</p>
</>     
  );
 
