import React from "react";
import "./SortingVisualizer.css";

export default class SortingVisualizer extends React.Component {
    constructor(props) {    
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 310; i++) {
            array.push(this.randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    mergeSort() {}

    bubbleSort() {}

    insertionSort() {}

    render() {
        const {array} = this.state;

        return (
            <>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div 
                            className="array-bar" 
                            key={idx}
                            style={{height: `${value}px`}}>
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                </div>
            </>

        );
    }

    randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}