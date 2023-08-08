import React from 'react';
import Button from './Button';
import './calculator.css';

function Calculator() {
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
    <div className="calc-grid">
      <div className="output">
        <div className="prev-operand" />
        <div className="curr-operand" />
      </div>
      {Data.map((num) => (
        <Button key={num.id} label={num.label} className={num.className} />
      ))}
    </div>
  );
}

export default Calculator;
