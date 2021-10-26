import React from 'react';

const Navbar = (props) => {
  
  const loadUsers = async()=>{
    console.log('before');
    props.setLoading(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    console.log(jsonresponse.data);
    props.setUsers(jsonresponse.data);
    setTimeout(() => {
      props.setLoading(false);
    }, 3000);
  }
  return (
        <div className="navbar">
          <h1>TechCurators</h1>
        <button onClick={loadUsers}>Get Users</button>
      </div>
  );
}

export default Navbar;


// React js is library, React is not a framework
// Developed by facebook
// React is made up of components
// React js application is made up of diferent components
// and each component have its own logic and controls
// JSX stands for Javascript XML
// ES6 
// States and Props
// async and await
// how to fetch and display data


// create a folder 
// 1. open cmd
// 2. create react app
// 3. create a new react <react project>
// 4.npm install -g create-react-app

// Alternative
// 1. Create a folder
// 2.open it any code editor
// 3. npm install
// 4. npm start


// import React from 'react';
// import { render } from 'react-dom';
// const App = ()=>{
//   // return (
//     // <>
//     {/* // <React.Fragment> */}
//     {/* div is also making a row and its space so use react fragment */}
    
  
//   {/* // </React.Fragment> */}
//     // </>
//     // );



// }

// export default App;

