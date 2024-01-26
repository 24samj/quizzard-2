export const categories = [
    { name: "Javascript", value: "javascript" },
    { name: "HTML & CSS", value: "html_css" },
    { name: "General Knowledge", value: "general_knowledge" },
    { name: "Mathematics", value: "mathematics" },
    { name: "Pop Culture", value: "pop_culture" },
];

export const questionBank = {
    javascript: [
        {
            questions: [
                {
                    question: "Javascript is an _______ language?",
                    options: [
                        "Object-Oriented",
                        "Object-Based",
                        "Procedural",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Which of the following keywords is used to define a variable in Javascript?",
                    options: ["var", "let", "Both 1 & 2", "None of the Above"],
                },
                {
                    question:
                        "Which of the following is not a Javascript framework?",
                    options: ["Vue", "Node", "React", "Cassandra"],
                },
                {
                    question:
                        "What keyword is used to declare an asynchronous function in Javascript?",
                    options: [
                        "async",
                        "await",
                        "setTimeout",
                        "None of the Above",
                    ],
                },
                {
                    question: "What does … operator do in JS?",
                    options: [
                        "It is used to spread iterables to individual elements",
                        "It is used to describe a datatype of undefined size",
                        "No such operator exists",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option2", "option3", "option4", "option1", "option1"],
        },
        {
            questions: [
                {
                    question:
                        "What is the use of 'this' keyword in JavaScript?",
                    options: [
                        "It refers to the current object",
                        "It refers to the previous object",
                        "It refers to the global object",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Which of the following is not a valid JavaScript variable name?",
                    options: [
                        "2names",
                        "_first_and_last_names",
                        "FirstAndLast",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Which of the following is not a JavaScript data type?",
                    options: ["Undefined", "Number", "Boolean", "Character"],
                },
                {
                    question:
                        "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
                    options: [
                        "document.getElementByName('p').innerHTML = 'Hello World!';",
                        "document.getElementById('demo').innerHTML = 'Hello World!';",
                        "document.getElement('p').innerHTML = 'Hello World!';",
                        "document.getElementById('p').innerHTML = 'Hello World!';",
                    ],
                },
                {
                    question:
                        "Which event occurs when the user clicks on an HTML element?",
                    options: [
                        "onmouseclick",
                        "onmouseover",
                        "onclick",
                        "onmousehover",
                    ],
                },
            ],
            answers: ["option1", "option1", "option4", "option2", "option3"],
        },
        {
            questions: [
                {
                    question:
                        "Which of the following is not a looping structure in JavaScript?",
                    options: ["for", "while", "do-while", "repeat-until"],
                },
                {
                    question:
                        "What will the following code return: Boolean(10 > 9)?",
                    options: ["true", "false", "NaN", "None of the Above"],
                },
                {
                    question:
                        "Which of the following is not a reserved word in JavaScript?",
                    options: ["interface", "throws", "program", "short"],
                },
                {
                    question:
                        "What is the correct syntax for referring to an external script called 'xxx.js'?",
                    options: [
                        "<script href='xxx.js'>",
                        "<script name='xxx.js'>",
                        "<script src='xxx.js'>",
                        "None of the Above",
                    ],
                },
                {
                    question: "How do you write 'Hello World' in an alert box?",
                    options: [
                        "msg('Hello World');",
                        "alertBox('Hello World');",
                        "alert('Hello World');",
                        "msgBox('Hello World');",
                    ],
                },
            ],
            answers: ["option4", "option1", "option3", "option3", "option3"],
        },
        {
            questions: [
                {
                    question: "How do you create a function in JavaScript?",
                    options: [
                        "function = myFunction()",
                        "function:myFunction()",
                        "function myFunction()",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "How to write an 'if' statement for executing some code if 'i' is NOT equal to 5?",
                    options: [
                        "if i <> 5",
                        "if (i != 5)",
                        "if i =! 5 then",
                        "None of the Above",
                    ],
                },
                {
                    question: "How does a 'while' loop start?",
                    options: [
                        "while (i <= 10)",
                        "while i = 1 to 10",
                        "while (i <= 10; i++)",
                        "None of the Above",
                    ],
                },
                {
                    question: "How can you add a comment in a JavaScript?",
                    options: [
                        "'This is a comment",
                        "//This is a comment",
                        "<!--This is a comment-->",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "What is the correct way to write a JavaScript array?",
                    options: [
                        "var colors = (1:'red', 2:'green', 3:'blue')",
                        "var colors = 'red', 'green', 'blue'",
                        "var colors = ['red', 'green', 'blue']",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option3", "option2", "option1", "option2", "option3"],
        },
        {
            questions: [
                {
                    question:
                        "Which operator is used to assign a value to a variable?",
                    options: ["*", "-", "=", "x"],
                },
                {
                    question:
                        "What will the following code return: Boolean(3 < 7)?",
                    options: ["true", "false", "NaN", "None of the Above"],
                },
                {
                    question:
                        "Which event occurs when the user clicks on an HTML element?",
                    options: [
                        "onmouseclick",
                        "onmouseover",
                        "onclick",
                        "onmousehover",
                    ],
                },
                {
                    question: "How do you declare a JavaScript variable?",
                    options: [
                        "variable carName;",
                        "v carName;",
                        "var carName;",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Which operator can be used to compare two variables for equality in value and type?",
                    options: ["==", "===", "=", "!="],
                },
            ],
            answers: ["option3", "option1", "option3", "option3", "option2"],
        },
    ],

    html_css: [
        {
            questions: [
                {
                    question: "What does HTML stand for?",
                    options: [
                        "Hyper Text Markup Language",
                        "Hyperlinks and Text Markup Language",
                        "Home Tool Markup Language",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Which HTML tag is used to define an internal style sheet?",
                    options: [
                        "<style>",
                        "<css>",
                        "<script>",
                        "None of the Above",
                    ],
                },
                {
                    question: "Which CSS property controls the text size?",
                    options: [
                        "font-style",
                        "text-size",
                        "font-size",
                        "None of the Above",
                    ],
                },
                {
                    question: "What is the correct CSS syntax?",
                    options: [
                        "{body:color=black;}",
                        "{body;color:black;}",
                        "body:color=black;",
                        "body {color: black;}",
                    ],
                },
                {
                    question:
                        "How do you select an element with id 'demo' in CSS?",
                    options: [".demo", "demo", "#demo", "None of the Above"],
                },
            ],
            answers: ["option1", "option1", "option3", "option4", "option3"],
        },
        {
            questions: [
                {
                    question:
                        "Which HTML attribute is used to specify an alternate text for an image, if the image cannot be displayed?",
                    options: ["src", "alt", "href", "None of the Above"],
                },
                {
                    question:
                        "Which HTML tag is used to insert a line horizontally on your web page?",
                    options: ["<line>", "<hr>", "<h1>", "None of the Above"],
                },
                {
                    question:
                        "Which CSS property is used to change the background color?",
                    options: [
                        "color",
                        "bgcolor",
                        "background-color",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "How do you add a background color for all <h1> elements in CSS?",
                    options: [
                        "all.h1 {background-color: #FFFFFF;}",
                        "h1.all {background-color: #FFFFFF;}",
                        "h1 {background-color: #FFFFFF;}",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Which CSS property is used to change the left margin of an element?",
                    options: [
                        "indent",
                        "spacing",
                        "margin-left",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option2", "option2", "option3", "option3", "option3"],
        },
        {
            questions: [
                {
                    question: "What is the full form of CSS?",
                    options: [
                        "Cascading Style Sheet",
                        "Color and Style Sheet",
                        "Cascading Style Signal",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Which HTML tag is used to define a large heading?",
                    options: ["<h6>", "<heading>", "<h1>", "None of the Above"],
                },
                {
                    question:
                        "Which CSS property is used to change the text color of an element?",
                    options: [
                        "text-color",
                        "color",
                        "font-color",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "How do you select elements with class name 'test' in CSS?",
                    options: [".test", "test", "#test", "None of the Above"],
                },
                {
                    question: "Which CSS property controls the text alignment?",
                    options: [
                        "text-align",
                        "text-alignment",
                        "font-align",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option1", "option3", "option2", "option1", "option1"],
        },
        {
            questions: [
                {
                    question:
                        "Which HTML attribute specifies the destination address for a link?",
                    options: ["href", "link", "dest", "None of the Above"],
                },
                {
                    question:
                        "Which HTML tag is used to define a hyperlink, or link to another page?",
                    options: ["<link>", "<a>", "<url>", "None of the Above"],
                },
                {
                    question:
                        "Which CSS property is used to change the font of an element?",
                    options: [
                        "font-family",
                        "text-style",
                        "text-font",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "How do you make each word in a text start with a capital letter in CSS?",
                    options: [
                        "You can't do that with CSS",
                        "text-transform:capitalize",
                        "text-transform:uppercase",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Which CSS property controls the space between the element border and its content?",
                    options: [
                        "margin",
                        "border",
                        "padding",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option1", "option2", "option1", "option2", "option3"],
        },
        {
            questions: [
                {
                    question:
                        "Which HTML tag is used to specify a section of a document that contains related content?",
                    options: [
                        "<div>",
                        "<section>",
                        "<article>",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Which HTML tag is used to define a standard cell in a table?",
                    options: [
                        "<td>",
                        "<cell>",
                        "<tablecell>",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Which CSS property is used to set the transparency of an element?",
                    options: [
                        "opacity",
                        "transparent",
                        "alpha",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "How do you display hyperlinks without an underline in CSS?",
                    options: [
                        "a {text-decoration:none;}",
                        "a {underline:none;}",
                        "a {decoration:no-underline;}",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Which CSS property is used to set the stacking order of elements?",
                    options: ["align", "z-index", "stack", "None of the Above"],
                },
            ],
            answers: ["option2", "option1", "option1", "option1", "option2"],
        },
    ],

    general_knowledge: [
        {
            questions: [
                {
                    question: "Which planet is known as the Red Planet?",
                    options: ["Mars", "Mercury", "Earth", "None of the Above"],
                },
                {
                    question: "Who wrote the novel '1984'?",
                    options: [
                        "George Orwell",
                        "Aldous Huxley",
                        "Ray Bradbury",
                        "None of the Above",
                    ],
                },
                {
                    question: "What is the capital of Australia?",
                    options: [
                        "Sydney",
                        "Melbourne",
                        "Canberra",
                        "None of the Above",
                    ],
                },
                {
                    question: "Which chemical element has the symbol 'O'?",
                    options: ["Oxygen", "Osmium", "Gold", "None of the Above"],
                },
                {
                    question: "Who painted the Mona Lisa?",
                    options: [
                        "Vincent Van Gogh",
                        "Pablo Picasso",
                        "Leonardo da Vinci",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option1", "option1", "option3", "option1", "option3"],
        },
        {
            questions: [
                {
                    question: "Which country is the largest by land area?",
                    options: ["Russia", "Canada", "China", "None of the Above"],
                },
                {
                    question: "Who discovered penicillin?",
                    options: [
                        "Marie Curie",
                        "Alexander Fleming",
                        "Louis Pasteur",
                        "None of the Above",
                    ],
                },
                {
                    question: "What is the tallest mountain in the world?",
                    options: [
                        "K2",
                        "Mount Everest",
                        "Kangchenjunga",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Which animal is known as the 'ship of the desert'?",
                    options: [
                        "Horse",
                        "Camel",
                        "Elephant",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who is the author of 'Harry Potter'?",
                    options: [
                        "J.K. Rowling",
                        "Stephen King",
                        "Mark Twain",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option1", "option2", "option2", "option2", "option1"],
        },
        {
            questions: [
                {
                    question: "What is the smallest country in the world?",
                    options: [
                        "Monaco",
                        "Vatican City",
                        "San Marino",
                        "None of the Above",
                    ],
                },
                {
                    question: "What is the largest ocean in the world?",
                    options: [
                        "Atlantic Ocean",
                        "Indian Ocean",
                        "Pacific Ocean",
                        "None of the Above",
                    ],
                },
                {
                    question: "Which planet is closest to the sun?",
                    options: ["Venus", "Mercury", "Earth", "None of the Above"],
                },
                {
                    question: "What is the capital of Canada?",
                    options: [
                        "Toronto",
                        "Vancouver",
                        "Ottawa",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who invented the telephone?",
                    options: [
                        "Alexander Graham Bell",
                        "Guglielmo Marconi",
                        "Thomas Edison",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option2", "option3", "option2", "option3", "option1"],
        },
        {
            questions: [
                {
                    question: "What is the longest river in the world?",
                    options: [
                        "Amazon River",
                        "Nile River",
                        "Yangtze River",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who was the first person to walk on the moon?",
                    options: [
                        "Buzz Aldrin",
                        "Neil Armstrong",
                        "Yuri Gagarin",
                        "None of the Above",
                    ],
                },
                {
                    question: "What is the capital of Spain?",
                    options: [
                        "Barcelona",
                        "Valencia",
                        "Madrid",
                        "None of the Above",
                    ],
                },
                {
                    question: "Which chemical element has the symbol 'Au'?",
                    options: ["Silver", "Gold", "Copper", "None of the Above"],
                },
                {
                    question: "Who is the author of 'Pride and Prejudice'?",
                    options: [
                        "Emily Bronte",
                        "Jane Austen",
                        "Louisa May Alcott",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option2", "option2", "option3", "option2", "option2"],
        },
        {
            questions: [
                {
                    question: "Who was the first person to walk on the moon?",
                    options: [
                        "Neil Armstrong",
                        "Buzz Aldrin",
                        "Yuri Gagarin",
                        "None of the Above",
                    ],
                },
                {
                    question: "What is the capital of Australia?",
                    options: [
                        "Sydney",
                        "Melbourne",
                        "Canberra",
                        "None of the Above",
                    ],
                },
                {
                    question: "What is the largest ocean on Earth?",
                    options: [
                        "Atlantic Ocean",
                        "Indian Ocean",
                        "Pacific Ocean",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who wrote the novel '1984'?",
                    options: [
                        "George Orwell",
                        "Aldous Huxley",
                        "Ray Bradbury",
                        "None of the Above",
                    ],
                },
                {
                    question: "What is the chemical symbol for gold?",
                    options: ["G", "Go", "Au", "None of the Above"],
                },
            ],
            answers: ["option1", "option3", "option3", "option1", "option3"],
        },
    ],

    mathematics: [
        {
            questions: [
                {
                    question: "What is the square root of 144?",
                    options: ["10", "12", "14", "16"],
                },
                {
                    question:
                        "Which of the following numbers is a prime number?",
                    options: ["4", "9", "13", "15"],
                },
                {
                    question:
                        "What is the value of 𝝅 up to three decimal places?",
                    options: ["3.141", "3.142", "3.143", "3.144"],
                },
                {
                    question: "Solve for x: 2x + 5 = 11",
                    options: ["2", "3", "4", "5"],
                },
                {
                    question: "What is the area of a circle with radius r?",
                    options: ["𝝅r^2", "2𝝅r", "𝝅r", "None of the Above"],
                },
            ],
            answers: ["option2", "option3", "option1", "option2", "option1"],
        },
        {
            questions: [
                {
                    question: "What is the sum of angles in a triangle?",
                    options: [
                        "90 degrees",
                        "180 degrees",
                        "270 degrees",
                        "360 degrees",
                    ],
                },
                {
                    question:
                        "What is the formula for the Pythagorean theorem?",
                    options: [
                        "a^2 + b^2 = c^2",
                        "a^2 - b^2 = c^2",
                        "a^2 * b^2 = c^2",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "What is the value of ℇ up to three decimal places?",
                    options: ["2.171", "2.271", "2.371", "2.471"],
                },
                {
                    question:
                        "If a triangle has angles measuring 45 degrees, 45 degrees, and 90 degrees, what type of triangle is it?",
                    options: [
                        "Equilateral",
                        "Isosceles",
                        "Scalene",
                        "Right-angled",
                    ],
                },
                {
                    question: "What is the volume of a sphere with radius r?",
                    options: [
                        "4/3𝝅r^3",
                        "2/3𝝅r^3",
                        "𝝅r^2",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option2", "option1", "option2", "option4", "option1"],
        },
        {
            questions: [
                {
                    question: "What is the logarithm base 10 of 1000?",
                    options: ["1", "2", "3", "4"],
                },
                {
                    question: "What is the sine of 90 degrees?",
                    options: ["0", "1", "2", "None of the Above"],
                },
                {
                    question: "What is the cosine of 0 degrees?",
                    options: ["0", "1", "2", "None of the Above"],
                },
                {
                    question: "What is the tangent of 45 degrees?",
                    options: ["0", "1", "2", "None of the Above"],
                },
                {
                    question: "What is the cosecant of 60 degrees?",
                    options: ["0", "1", "2", "None of the Above"],
                },
            ],
            answers: ["option3", "option2", "option2", "option2", "option3"],
        },
        {
            questions: [
                {
                    question: "What is the factorial of 5?",
                    options: ["120", "130", "140", "150"],
                },
                {
                    question:
                        "What is the common ratio in a geometric sequence where the first three terms are 2, 6, 18?",
                    options: ["2", "3", "4", "None of the Above"],
                },
                {
                    question:
                        "What is the sum of the first 10 terms of the arithmetic series where the first term is 1 and the common difference is 1?",
                    options: ["45", "50", "55", "60"],
                },
                {
                    question:
                        "If (a + 2b = 10) and (2a - b = 5), what is the value of (a + b)?",
                    options: ["5", "8", "10", "None of the Above"],
                },
                {
                    question:
                        "In a geometric progression, if the first term is 2 and the common ratio is 3, what is the fourth term?",
                    options: ["54", "18", "6", "None of the Above"],
                },
            ],
            answers: ["option1", "option2", "option2", "option2", "option1"],
        },
        {
            questions: [
                {
                    question: "What is the cube root of 27?",
                    options: ["2", "3", "4", "5"],
                },
                {
                    question:
                        "Which of the following numbers is an even prime number?",
                    options: ["1", "2", "3", "5"],
                },
                {
                    question:
                        "What is the value of 𝝅 up to two decimal places?",
                    options: ["3.14", "3.15", "3.16", "3.17"],
                },
                {
                    question: "What is the derivative of 2x^2?",
                    options: ["2x", "4x", "x^2", "None of the Above"],
                },
                {
                    question:
                        "What is the circumference of a circle with radius r?",
                    options: ["2𝝅r", "𝝅r^2", "𝝅r", "None of the Above"],
                },
            ],
            answers: ["option2", "option2", "option1", "option2", "option1"],
        },
    ],

    pop_culture: [
        {
            questions: [
                {
                    question: "Who wrote the 'Harry Potter' series?",
                    options: [
                        "J.K. Rowling",
                        "Stephen King",
                        "George R.R. Martin",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Who played Iron Man in the Marvel Cinematic Universe?",
                    options: [
                        "Chris Evans",
                        "Robert Downey Jr.",
                        "Chris Hemsworth",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "What is the name of the coffee shop in the TV show 'Friends'?",
                    options: [
                        "Central Perk",
                        "Central Park",
                        "Central Coffee",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who is the author of 'Game of Thrones'?",
                    options: [
                        "J.K. Rowling",
                        "Stephen King",
                        "George R.R. Martin",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who won the Best Actor Oscar in 2020?",
                    options: [
                        "Leonardo DiCaprio",
                        "Brad Pitt",
                        "Joaquin Phoenix",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option1", "option2", "option1", "option3", "option3"],
        },
        {
            questions: [
                {
                    question: "Who is the lead singer of the band 'Coldplay'?",
                    options: [
                        "Chris Martin",
                        "Bono",
                        "Adam Levine",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who directed the movie 'Inception'?",
                    options: [
                        "Christopher Nolan",
                        "Steven Spielberg",
                        "Martin Scorsese",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Who played the character of 'Walter White' in the TV show 'Breaking Bad'?",
                    options: [
                        "Bryan Cranston",
                        "Aaron Paul",
                        "Bob Odenkirk",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who is the author of 'The Da Vinci Code'?",
                    options: [
                        "Dan Brown",
                        "Stephen King",
                        "John Grisham",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Who played the character of 'Loki' in the Marvel Cinematic Universe?",
                    options: [
                        "Chris Hemsworth",
                        "Tom Hiddleston",
                        "Mark Ruffalo",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option1", "option1", "option1", "option1", "option2"],
        },
        {
            questions: [
                {
                    question: "Who is the creator of the TV show 'The Office'?",
                    options: [
                        "Ricky Gervais",
                        "Steve Carell",
                        "Greg Daniels",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Who is the lead actor in the 'John Wick' series?",
                    options: [
                        "Keanu Reeves",
                        "Tom Cruise",
                        "Brad Pitt",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who is the author of 'To Kill a Mockingbird'?",
                    options: [
                        "Harper Lee",
                        "J.D. Salinger",
                        "F. Scott Fitzgerald",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who directed the movie 'Pulp Fiction'?",
                    options: [
                        "Quentin Tarantino",
                        "Martin Scorsese",
                        "Stanley Kubrick",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Who played the character of 'Eleven' in the TV show 'Stranger Things'?",
                    options: [
                        "Millie Bobby Brown",
                        "Winona Ryder",
                        "Natalia Dyer",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option1", "option1", "option1", "option1", "option1"],
        },
        {
            questions: [
                {
                    question: "Who is the lead singer of the band 'U2'?",
                    options: [
                        "Bono",
                        "Chris Martin",
                        "Adam Levine",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who directed the movie 'The Dark Knight'?",
                    options: [
                        "Christopher Nolan",
                        "Steven Spielberg",
                        "Martin Scorsese",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Who played the character of 'Jesse Pinkman' in the TV show 'Breaking Bad'?",
                    options: [
                        "Bryan Cranston",
                        "Aaron Paul",
                        "Bob Odenkirk",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who is the author of 'The Shining'?",
                    options: [
                        "Dan Brown",
                        "Stephen King",
                        "John Grisham",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Who played the character of 'Thor' in the Marvel Cinematic Universe?",
                    options: [
                        "Chris Hemsworth",
                        "Tom Hiddleston",
                        "Mark Ruffalo",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option1", "option1", "option2", "option2", "option1"],
        },
        {
            questions: [
                {
                    question:
                        "Who is the creator of the TV show 'Parks and Recreation'?",
                    options: [
                        "Ricky Gervais",
                        "Steve Carell",
                        "Greg Daniels",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Who is the lead actor in the 'Mission Impossible' series?",
                    options: [
                        "Keanu Reeves",
                        "Tom Cruise",
                        "Brad Pitt",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who is the author of 'The Catcher in the Rye'?",
                    options: [
                        "Harper Lee",
                        "J.D. Salinger",
                        "F. Scott Fitzgerald",
                        "None of the Above",
                    ],
                },
                {
                    question: "Who directed the movie 'The Shining'?",
                    options: [
                        "Quentin Tarantino",
                        "Martin Scorsese",
                        "Stanley Kubrick",
                        "None of the Above",
                    ],
                },
                {
                    question:
                        "Who played the character of 'Mike Wheeler' in the TV show 'Stranger Things'?",
                    options: [
                        "Finn Wolfhard",
                        "Gaten Matarazzo",
                        "Caleb McLaughlin",
                        "None of the Above",
                    ],
                },
            ],
            answers: ["option3", "option2", "option2", "option3", "option1"],
        },
    ],
};
