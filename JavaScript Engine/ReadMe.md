## Call Stack and Memory Heap
 Memory Heap - where memory allocation happens. ie store variable, delete etc.
 Call Stack - where the engine keeps track of where your code is in its execution.

### Stack Overflow
When you have a lot of executables on the stack frame. Eg when you have a recursion, a function calling itself.

### Memory Leak
When you have allocated memory that is not being used. Eg: consider this loop
`const array = []`
`for (let i = 2; i > 1; i++) {`
`array.push(i - 1) }`

- But you are unlikely to do that. Others that are much common to do is:
1. Using Global variables.
2. Use of event listeners  and not cleaning up.
3. Use setInterval and adding objects which we may forget about.
- Research on all this. You have to use all of them but we have to be careful of how we use all of these.