import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivide = () => {
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="num1" className="form-label">Number 1:</label>
          <input type="number" className="form-control" id="num1" value={num1} onChange={handleNum1Change} />
        </div>
        <div className="mb-3">
          <label htmlFor="num2" className="form-label">Number 2:</label>
          <input type="number" className="form-control" id="num2" value={num2} onChange={handleNum2Change} />
        </div>
        <div className="mb-3">
          <Button variant="primary me-2" onClick={handleAdd}>Add</Button>
          <Button variant="danger me-2" onClick={handleSubtract}>Subtract</Button>
          <Button variant="success me-2" onClick={handleMultiply}>Multiply</Button>
          <Button variant="info me-2" onClick={handleDivide}>Divide</Button>
        </div>
      </form>
      {result && <div className="mt-4">Result: {result}</div>}
    </div>
  );
};

export default Calculator;