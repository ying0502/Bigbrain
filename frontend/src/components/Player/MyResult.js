/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable  consistent-return */
import React, { useEffect, useState } from 'react';
import { getResult } from '../../actions/quiz';

const QuestionItem = (props) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const id = props.match.params.pid;
    const res = await getResult(id);
    console.log(res);
    setData(res);
  }, []);

  return (
    <div className="center">
      {data.length > 0 && data.map((item, index) => (
        <div key={index} className="res">
          <div>
            question
            {index + 1}
            :
          </div>
          <div>
            your answer:
            {item.answerIds.join(',')}
          </div>
          <div>
            correct:
            {item.correct ? 'right answer' : 'wrong answer'}
          </div>
        </div>
      ))}

    </div>
  );
};

export default QuestionItem;
