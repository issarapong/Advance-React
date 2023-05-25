import { Component } from 'react';

class Content extends Component {
    componentWillUnmount() {
        console.log("I'm Dead");
    }
    render() {
        return <h1>Content</h1>;
    }
}

class App extends Component {
    // #1 Constructor
    constructor(props) {
        super(props);
        //     this.state = { count: 10, error: '' };
        this.handleReset = this.handleReset.bind(this); // this == App
    }

    // #2 : ใส่เหมือนเป็น property
    state = { count: 0, error: 'no-error' };

    handleReset() {
        // console.log(this);
        this.setState({ count: 0 });
    }

    componentDidMount() {
        console.log('Didmount');
        // ใช้เรียก API
    }
    // useEffect(()=>{},[])

    componentDidUpdate() {
        console.log('Did update');
    }
    // useEffect(()=>{},[state])

    // UI
    // render :function () {return JSX}
    render() {
        // console.log(this);
        return (
            <div className='text-center my-12'>
                <h1>Counter : {this.state.count}</h1>
                <div className='flex gap-4 justify-center my-2'>
                    <button
                        onClick={() => {
                            // console.log(this);
                            this.setState({ count: this.state.count - 1 });
                        }}
                    >
                        -
                    </button>
                    <button onClick={this.handleReset}>reset</button>
                    <button
                        onClick={() => {
                            this.setState({ count: this.state.count + 1 }); // Merge เข้ากับ state เดิม
                        }}
                    >
                        +
                    </button>
                </div>
                {this.state.count == 5 ? '' : <Content />}
            </div>
        );
    }
}

export default App;

// function User(firstName) {
//     // this = {}
//     this.firstName = firstName; // {firstName: "...."}
//     this.isAdmin = false; // {firstName:"...", isAdmin : false}
//     // return this
// }

// const userOne = new User('Pavit');
// // <User/>

// Function declaration
// function add (x,y) {
// return x+y
// }

// Function expression
// const a = function(x,y) {return x+y}
// const b = (x,y) => x+y