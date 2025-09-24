1993 bredn nik
1. Browser 
2. High-level lg
3. #1 lg
4. EcmaScript
5. Only code run natively in browser aside frm web assembly
6. Runtime
7. Scripting lang
8. Execute code on broswers Dev tools 
9. Interpreted line-by-line oppsite to c compiled ahead of time
10. v8 JIT
11. Jsut in time compilation
12. Need html file <Script></script>
13. src attribute reference the source file <script src="scipt.js"></script>
14. printing standard output using - console.log() open in console in browser
15. LET <variable in camelcase> 
16. dynamic language {No Datatype annotations are not neccessary}
17. PRIMITIVES: datatypes {String}
18. datatypes {string, numbers, bigint, boolean, indefined, symbol, null}
19. UNDEFINED: W/O assigned var can be declared which are assigned as undefined
20. NULL: we can explicitly assing value null to var and then later assign it.
21. OBJECTS
22. ; is not strictly used if missed js parser will take care for you
23. VAR: don't exist
24. LEXICAL ENVIRONMENT: basically determines where variable work and were they don't
25. VARIABLE SCOPES : global, function (), block{}
26. HOISTING: is defining locally VAR (not mess it using VAR)
27. FUNCTION DEFINATION: are objects used as expression, variables, higher order functions (functions used as return value, input value etc)
28. CLOSURE: Parent func's variable stored in heap and are accessible by the child func even after the parent function done executing(var not in stack mem); this happens because js automatically stores the data in outer function in heap memory.
29. THIS: global-scoped/window broswer; object level/ binding {bind()}-this wieredness -> arrow functions
30. ARROW FUNCTIONS(=>): anonymus 
31. PASS BY VALUE: <fun(num,obj)> -> nums passed by val means copy of orginal
32. PASS BY REFERRENCE: <fun(num,obj)> -> obj's passed by referrence
33. OBJECTS LITERAL: defined using {}
34. OBJECT CONSTRUCTOR: using construtor to creat object <const human = new Object()>
35. OBJECT PROPERTY: {Key: value} pairs 
36. INHERITANCE (OBJ PROTOTYPE): human.__proto__.__proto__;// not used;  Object.getPrototypeOf(human);// used 
37. LIST/SET/MAP: const list = []; const uniq = new set(list); const dict = new Map([ ['key', val]]);
38.JS IS GARBAGE COLLECTED: WEAKMAP is used instead of MAPs to reduce memory.
39. Non blocking event loop: 
40. ASynchronization: using callback funtions like setTimeout(()=>,100); 
41. CALLBACK HELL: overused async functions led to callback hell resolved using promises
42. PROMISE(RESOLVE/REJECT): new Promise((resolve, reject)=>{//Do something if(condi){resolve('Success')}else{reject('failure')}})
43. THEN/CATCH COSUMER METHODS for PROMISE: then(); catch();
44. ASYNC FUNCTIONS: automatically return a promise; then in body we can use await(pause execution until other promise are resolved)
45. TRY/CATCH: keyword/ handle error with try{}catch{}
46. ES Module: all code are private to files
47. EXPORT
48. IMPORT
49. NPM: largest js package maganer/ module
50. PACKAGE JSON: contains all dependencies used in project
51. DOCUMENT OBJECT MODEL(DOM): document->root-elemetn->element->text/attributes
51. DOCUMENT: let you interact with browser html ()
52. QUERY SELECTOR: queryselector('{.css_objet}')
53: ELEMENT:use to query specific elements on webpage/ ques
54. EVENTS;
55. IMPERATIVE CODE: is disliked about js -> solution 
56. UI LIBRARIES: VITE/ REACT.JS/ FLUTTER
56. DECLARATIVE: UI = f(state) 
57. COMPONENTS: JS/HTML/CSS
58. MOULE BUNDLER: VITE/ WEBPACK
59. NETWORK WATERFALL
60. DYNAMIC IMPORTS
61. NODE.JS 
62. CROSS PLATFORM FRAMEWORKS: IOS/ANROID/FULL-STACK WEB APP

63. Async/Await = 	Async = makes a function return a promise & promise() are empty 	parameters
					Await = makes a async function wait for a promise
					
					Allows you to write asynchronous code in a synchronous manner 
					Async doesn't have resolve or reject parameters
					Everything after Await is placed in an event queue
					Using this together we don't need .then() .catch() instead we can use try() / catch()

67. Await/Async = Async = makes a function to return a promise...
68. Using async w/o await results in uncaught error
