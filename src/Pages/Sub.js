import { useParams } from 'react-router-dom';

const Sub = () => {
  const { num1, num2 } = useParams();
  const sub = Number(num1) - Number(num2);

  return (
    <div>
      <p>The sub of {num1} and {num2} is {sub}</p>
    </div>
  );
};

export default Sub;
