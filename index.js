const parent=React.createElement('div',{id:"parent"},
[React.createElement('div',{id:"child"}),
[React.createElement('h1',{},"I am a Child"),React.createElement('h2',{},"I am a  2ndChild")],React.createElement('div',{id:"child1"}),
[React.createElement('h1',{},"I am a Child"),React.createElement('h2',{},"I am a  2ndChild")]]);


// const heading=React.createElement("h1",{id:"heading"},"Hello World")
// console.log(heading)
console.log(parent)
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)
// console.log(parent)