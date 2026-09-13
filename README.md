
---------------------GitHUb Repository------------------

1.Project Name---- B14-A05-DevStack-Project

2.Description of my project  -----
           A comprehensive, full-stack web application designed to streamline modern developer workflows, showcase portfolio projects, and organize developer resources efficiently.

3.Uses Technology-------
  
    - Frontend: HTML5, CSS, JavaScript (ES6+), React.js, Tailwind CSS
    - Backend: Node.js, 
    - 
    - Tools & Hosting: GitHub
          

4.. 3 features of project--------


      -Interactive Resource Dashboard: Browse, filter, and organize essential development tools, documentation links, and code snippets in real time.
      - User Authentication & Profiles: Secure user sign-up/login system allowing developers to customize profiles and save personal project stacks.
      - Responsive & Modern UI:Fully optimized layout built with Tailwind CSS, ensuring a seamless experience across desktop, tablet, and mobile devices.










-------------------QUESTIONS PART---------------

Question-1---------
.Answer ---- JSX is a syntax extension for JavaScript that lets us write HTML-like code directly inside React. It makes writing and reading UI components much easier than using raw React.createElement functions.

Question-2---------
.Answer---- Props are read-only inputs passed from a parent component down to a child, whereas State is local data managed internally within a component that triggers a re-render whenever it changes.



Question-3---------
.Answer------ useState is a React Hook that allows functional components to store and update dynamic state. In my project, I used it to manage dynamic data like storing the array of items and updating UI states.


Question-4---------
.Answer------ useEffect is used to handle side effects in a component, such as API calls or fetching data. I used it to fetch the JSON data when the component first mounts so the page renders with the initial data automatically.


Question-5---------
.Answer------- React uses the unique key prop to identify which items have changed, been added, or removed. This helps React efficiently update only the modified items in the DOM instead of re-rendering the entire list.


Question-6---------
.Answer------ Conditional rendering means displaying specific components or elements based on a dynamic condition. In my project, I used logical && to show a fallback 'Empty List' message when the data array length is zero.

Question-7---------
.Answer------ To send data from parent to child, we pass it down directly via props. To send data back from child to parent, the parent passes down a callback function as a prop, and the child executes that function passing its data back as an argument.