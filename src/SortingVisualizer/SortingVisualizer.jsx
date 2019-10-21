import React from 'react';
import './SortingVisualizer.css';


export default class SortingVisualizer extends React.Component{
constructor(props){

    super(props);

    this.state = {
        array: [],
    };
}

componentDidMount(){ 
    this.resetArray();
}

resetArray(){

    const array = [];
    for(let i=0; i< 100; i++){
        array.push(randomIntFromInterval(5,100));

    }
    this.setState({array});
}

mergeSort(){}

quickSort(){}

heapSort(){}

bubbleSort(){}

    render(){
        const{array} = this.state;

        return(
        <div className="array-container">
        {array.map((value, idx) => (
        <div className = "array-bar" 
        key ={idx} 
        style={{height: `${value}px`}}> 
        </div>
        ))} 
        <button onClick={() => this.resetArray()} className = "button">Generate New Array</button>
        <button onClick={() => this.mergeSort()} className = "button">Merge Sort</button>
        <button onClick={() => this.quickSort()} className = "button">Quick New Sort</button>
        <button onClick={() => this.heapSort()} className = "button">Heap New Sort</button>
        <button onClick={() => this.bubbleSort()} className = "button">Buble New Sort</button>
        </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}


