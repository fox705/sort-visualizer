import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';
import './SortingVisualizer.css';


//Variables
const ANIMATION_SPEED_MS = 10;
const NUMBER_OF_ARRAY_BARS = 80;
const PRIMARY_COLOR = 'rgb(38, 161, 14)';
const SECONDARY_COLOR = 'red';

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
    for(let i=0; i< NUMBER_OF_ARRAY_BARS; i++){
        array.push(randomIntFromInterval(5,1000));

    }
    this.setState({array});
}

mergeSort(){
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
        }
    }

}

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
        <button onClick={() => this.mergeSort()} >Merge Sort</button>
        <button onClick={() => this.quickSort()} className = "button">Quick Sort</button>
        <button onClick={() => this.heapSort()} className = "button">Heap Sort</button>
        <button onClick={() => this.bubbleSort()} className = "button">Buble Sort</button>
        </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}


