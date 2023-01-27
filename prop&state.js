/*let n = 10;

function testFunction(a) {
  console.log(a);
}

function demofunction(){
  let b = n + 10;
  testFunction(b);
}
demofunction();*/


//   demo.js
//     |
//   demoFunction
//    |
//   testFunction

//PROPS-->>

/*How do you pass data with props?
Here is an example of how data can be passed by using props:

class ParentComponent extends Component {    
    render() {    
        return (        
            <ChildComponent name="First Child" />    
        );  
    }
}

const ChildComponent = (props) => {    
    return <p>{props.name}</p>; 
};
Firstly, we need to define/get some data from the parent component and assign it to a child component’s “prop” attribute.

<ChildComponent name="First Child" />
“Name” is a defined prop here and contains text data. Then we can pass data with props like we’re giving an argument to a function:

const ChildComponent = (props) => {  
  // statements
};
And finally, we use dot notation to access the prop data and render it:

return <p>{props.name}</p>;*/



//STATE-->>
//Here is an example showing how to use state:

/*class Test extends React.Component {    
    constructor() {    
        this.state = {      
            id: 1,      
            name: "test"    
        };  
    }    
    
    render() {    
        return (      
            <div>        
              <p>{this.state.id}</p>        
              <p>{this.state.name}</p>      
            </div>    
        );  
    }
}
//How do you update a component’s state?
//State should not be modified directly, but it can be modified with a special method called setState( ).

this.state.id = “2020”; // wrong

this.setState({         // correct  
    id: "2020"
});*/