import ReactDOM from "react-dom/client"
var obj=new Date()
 
var h=obj.getHours()
var m=obj.getMinutes()
var s=obj.getSeconds()
var dt=obj.getDate()
var mt=obj.getMonth()+1
var yr=obj.getFullYear()
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
 
<h1>{h}:{m}:{s}</h1>
<h2>{dt}/{mt}/{yr}</h2>
 
</>
 
);