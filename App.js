// Below code creates following structure
// <div id = "root">
// <h1>This is h1 tag</h1>
// </div>


// const heading = React.createElement("h1",{},"This is h1 tag");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

//suppose if we have siblings , in the third arg of 
//createElement we pass the children as an array as below
//Below code cretes the following sturcture inside the root
// <div id="root">
//   <div id="parent">
//     <div id="child1">
//      <h1>This is h1 tag</h1>
//      <h2>this is h2 tag</h2>
//     </div>
//     <div id="child2">
//      <h2>this is h2 tag</h2>
//      <h2>this is h2 tag</h2>
//     </div>
//   </div>
// </div>
const parent = React.createElement("div",{id:"parent"},
[
React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"This is h1 tag"),
React.createElement("h2",{},"this is h2 tag")
]),
React.createElement("div",{id:"child2"},
[React.createElement("h2",{},"this is h2 tag"),
React.createElement("h2",{},"this is h2 tag")])])
console.log(parent);//object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);