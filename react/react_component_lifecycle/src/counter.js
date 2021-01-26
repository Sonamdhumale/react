import React from 'react'
const ErrorComponent = () => <div>{this.state.ignore}</div>
export default class Counter extends React.Component {
    constructor (props){
        console.log('Constructure')
        super(props)

        this.state ={
            counter : 0,
            seed: 0,
            intializing: true
        }
        this.increment = () => this.setState({counter: this.state.counter+1})
        this.decrement = () => this.setState({counter: this.state.counter-1})
    }

    static getDerivedStateFromProps(props, state){
        console.log("derive props");
        if(props.seed && state.seed !==props.seed ){
            return{
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
    }

    componentDidMount (){
        console.log('Component did mount')
        console.log('-------------------')
    }

    shouldComponentUpdate(nextProps , nextState){
       
       if(nextProps.ignoreProp &&
        this.props.ignoreProp !== nextProps.ignoreProp){
            console.log('should component update - do not render')
            console.log('-------------------')
            return false
        } 
        console.log('should component update - render')
        return true
    }

    componentDidUpdate(prevProps, pervState, snapshot){
        console.log('component did update');
       setTimeout(() => {
            this.setState({intializing: false})
        }, 500);
        console.log('-------------------')
    }

    componentWillUnmount(){
        console.log('component will unmount')
        console.log('-------------------')
    }

    getSnapshotBeforeUpdate(prevProps ,pervState){
        console.log('get snapshot before update');
        return null
    }

    componentDidCatch(error , info){
        console.log('catch error');
        this.setState(error , info)
    }

     func =() =>{
        console.log('hiii');
    }

    render() {
        this.func()
        console.log('Render' )

        if(this.state.intializing){
            return <div>Initializing...</div>
        }
        if(this.props.showErrorComponent && this.state.error){
            return<div>error occured{this.state.error.message}</div>
        }
        return <div>
            <button onClick = {this.increment}>Increment</button>
            <button onClick = {this.decrement}>Decrement</button>
            <div className = "counter">
                counter: {this.state.counter}
            </div>
            {this.props.shouldComponentUpdate?<ErrorComponent/> : null}
        </div>
    }
}


