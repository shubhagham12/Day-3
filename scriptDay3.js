// Day 3 

// Que. 1 For the given JSON iterate over all for loops (for, forEach, for of, for in)


// Creating a object
let obj = [
    { name: "Rohit", number: 45, team: "MI" },
    { name: "Virat", number: 18, team: "RCB" },
    { name: "MSD", number: 7, team: "CSK" },
    { name: "Hardik", number: 33, team: "GT" },
  ];
  
  // for loop
  for (let i = 0; i < obj.length; i++) {
    console.log(
      `Name: ${obj[i].name}
    Number: ${obj[i].number}
      Team: ${obj[i].team} 
      `
    );
  }
  
  // forEach loop
  obj.forEach((el) =>
    console.log(
      `Name: ${el.name}
      Number: ${el.number}
      Team: ${el.team} 
    `
    )
  );
  
  // for of loop
  for (let val of obj) {
    console.log(
      `Name: ${val.name}
      Number: ${val.number}
      Team: ${val.team} 
      `
    );
  }
  
  // for in loop
  for (let index in obj) {
    console.log(
      `Name: ${obj[index].name}
      Number: ${obj[index].number}
      Team: ${obj[index].team} 
      `
    );
  }
  
  //------------------------------------------------------------------------x
  // Output :- 
  
  // Name: Rohit
  // Number: 25
  // Team: MI
  
  // Name: Virat
  // Number: 18
  // Team: RCB
  
  // Name: MSD
  // Number: 7
  // Team: CSK
  
  // Name: Hardik
  // Number: 33
  // Team: GT

  //------------------------------------------------------------------------x

  
  // Que. 2 Create your own resume data in JSON format
  const myResume = [
    {
      name: "Shubham",
      email: "shubham@gmail.com",
      phone: 9673202079,
      address: {
        city: "Murtijapur",
        state: "Maharashtra",
        pincode: 444107,
      },
      education: [
        {
          institute: "GPY",
          degree: "Diploma",
          branch: "CO",
          percentage: 74,
        },
        {
          institute: "SGBAUniversity",
          degree: "BE",
          branch: "IT",
          percentage: 84,
        },
      ],
      skills: [
        "HTML",
        "CSS",
        "C++",
        "BAsic JAVA",
        "Javascript",
        "SQL",
      ],
      certifications: [
        {
          courseName: "Python tranning",
          certificationName: "IIT Bombay Spoken Tutorial",
          year: 2018,
        },
       
      ],
      projects: [
        {
          name: "Online Book Recommendation System",
          about:
            "Recommendations system are tools in e-commerce system which helps user to find the appropriate products. The approach of recommendation system is used for information filtering and based on user preference and rating, which is helpful for any user to purchase items according to their need of interest.",
        },
      ],
      activities: ["Traveling", "Playing Cricket"],
    },
  ];
  
  console.log(myResume);

//-------------------------------------------------------------------------------x
  
   
 // Que 3. Read about the difference between window, screen and document in javascript
 
 /* 
    ->    // Window object
     - Window object represents a browser window that displays the contents of the webpage.
     - Whenever a window appears on the screen to display the contents of the document, the window object is created.
     - Window is the very first object that is loaded in the browser.
     - It is object of the browser.
     - Global objects, functions and variables of javascript are members of the window object.
     - We can access the winow from the window only (window.window).
     - The window is part of browser object model.
     - Properties of the window object cannot be accessed by the document object.
     - Syntax: window.propertyname;
     - Some methods of window object are alert(), atob(), blur(), btoa(), clearInterval(), clearTimeout(), close(), confirm(), focus(), open(), prompt(),..... etc.
//-------------------------------------------------------------------------------------x

  ->    // Screen object
     -The Screen interface represents a screen, usually the one on which the current window is being rendered, and is obtained using window.screen
     - It is object of the window property.
     - It can be used to display screen width, height, colorDepth, pixelDepth etc. It is not mandatory to write window prefix with screen object. It can be written without window prefix.
     - Some properties of screen object are Screen.availTop, Screen.availLeft, Screen.availHeight, Screen.availWidth, Screen.avail.colorDepth, Screen.height, Screen.left,..... etc.
     
    
 //----------------------------------------------------------------------------------------x
 ->    // Document object
     - Javascript document object is an object that provides access to all HTML elements of a document.
     - With the help of document objects, we can add dynamic content to our web page.
     - It is loaded inside the window.
     - It is object of the window property.
     - The document object consists of tags, elements with attributes in HTML.
     - We can access the document from a window using the window.document.
     - The document is part of browser object model and document object model.
     - Properties of document objects such as title, body, cookies, etc can also be accessed by a window like this window.document.title.
     - Syntax: document.propertyname;
     - Some methods of document object are addEventListener(), adoptNode(), close(), createAttribute(), createElement(), createEvent(), createComment(), getElementById(), getElementsByClassName(), getElementsByName(), getElementsByTagName(), querySelector(), querySelectorAll(),..... etc.
 //----------------------------------------------------------------------------------------x
*/
