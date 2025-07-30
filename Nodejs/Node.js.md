Frameworks -- Reuse components, Reduce overhead (helps avoid writing code from scratch)

Runtime environment -- the environment in which the program executes, providing the necessary resources and infrastructure for the program to run smoothly. 

Asynchronous --  doesn't have to execute sequentially
example - while waiting for a file to load, Node can handle other requests.

Event-driven -- trigger the bits of code when the event happens 
(Node.js -- combines the two -- so instead of waiting for tasks, it listens for events - like file read completed - and runs call backs)

Node REPL: (computer environment where user inputs are read and evaluated, and then the results are returned to the user)
R - read
E - eval
P - print
L - loop
-- environment similar to inspect tab we get on chrome -- just type node in the terminal

To execute a .js code -- node index.js in the command line

NPM
```
npm init -- to create a package.json file (configuration file)
npm install <something>
```
