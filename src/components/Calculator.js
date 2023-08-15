import React, { useState } from 'react';
import Button from './Button';
import './calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleButtonClick = (event) => {
    const clickedBtn = event.target.textContent;
    const newValue = calculate(calculatorData, clickedBtn);
    setCalculatorData(newValue);
  };
  const { total, operation, next } = calculatorData;
  const Data = [
    {
      label: 'AC',
      id: 1,
      className: 'blue',
    },
    {
      label: '+/-',
      id: 2,
      className: 'blue',
    },
    {
      label: '%',
      id: 3,
      className: 'blue',
    },
    {
      label: '÷',
      id: 4,
      className: 'bgColor',
    },
    {
      label: '7',
      id: 5,
      className: 'blue',
    },
    {
      label: '8',
      id: 6,
      className: 'blue',
    },
    {
      label: '9',
      id: 7,
      className: 'blue',
    },
    {
      label: 'x',
      id: 8,
      className: 'bgColor',
    },
    {
      label: '4',
      id: 9,
      className: 'blue',
    },
    {
      label: '5',
      id: 10,
      className: 'blue',
    },
    {
      label: '6',
      id: 11,
      className: 'blue',
    },
    {
      label: '-',
      id: 12,
      className: 'bgColor',
    },
    {
      label: '1',
      id: 13,
      className: 'blue',
    },
    {
      label: '2',
      id: 14,
      className: 'blue',
    },
    {
      label: '3',
      id: 15,
      className: 'blue',
    },
    {
      label: '+',
      id: 16,
      className: 'bgColor',
    },
    {
      label: '0',
      id: 17,
      className: 'span-2',
    },
    {
      label: '.',
      id: 18,
      className: 'blue',
    },
    {
      label: '=',
      id: 19,
      className: 'bgColor',
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Let us do some calculations!!</h1>
      <div className="calc-grid">
        <div className="output">
          <div className="curr-operand">{ next || operation || total || 0 }</div>
        </div>
        {Data.map((num) => (
          <Button
            key={num.id}
            label={num.label}
            className={num.className}
            handleButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </div>

  );
}

export default Calculator;
