import React from 'react';
import Button from './Button';

const Calculator = () => (
  <div className="calc-grid">
    <div className="output">
      <div className="prev-operand" />
      <div className="curr-operand" />
    </div>
    <Button label="AC" />
    <Button label="+/-" />
    <Button label="%" />
    <Button label="÷" className="bgColor" />
    <Button label="7" />
    <Button label="8" />
    <Button label="9" />
    <Button label="x" className="bgColor" />
    <Button label="4" />
    <Button label="5" />
    <Button label="6" />
    <Button label="-" className="bgColor" />
    <Button label="1" />
    <Button label="2" />
    <Button label="3" />
    <Button label="+" className="bgColor" />
    <Button label="0" className="span-2" />
    <Button label="." />
    <Button label="=" className="bgColor" />
  </div>

);

export default Calculator;
