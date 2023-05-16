import { useParams } from 'react-router-dom';

const Sum = () => {
  const { num1, num2 } = useParams();
  const sum = Number(num1) + Number(num2);

  return (
    <div>
      <p>The sum of {num1} and {num2} is {sum}</p>
    </div>
  );
};

export default Sum;
