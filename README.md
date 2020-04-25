# React Hooks
## why react hooks.  What benefits?
### ES6 has Class
### Use state in functional components
### Improved code reuse and composition
### use function() instead of React.component
#### destructured array
#### const [ someVar, setVar ] = React.useState( some Intial state goes here )
#### no more React Lifecycles but think of synchronization
#### useEfect
####  React.useEffect(()=> { document.title = `Hello, ${userName}}, [userName])
####  above will run whenever userName changes
####  React.useEffect(()=> { document.title = `Hello, ${userName}}, [userName, password])
####  above will run whenever userName or password is changed
####  React.useEffect(()=> { document.title = `Hello, ${userName}}, [])
####  will be called once
## Demonstrate *ngIf like behavior