/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable  consistent-return */
import React, { useEffect, useState } from 'react';
import { Result } from '../../actions/quiz';

const QuestionItem = (props) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const id = props.match.params.sid;
    const res = await Result(id);
    console.log(res);
    setData(res.results);
  }, []);

  return (
    <div className="center">
      {data.length > 0 && data.map((item, index) => (
        <div key={index} className="res">
          <div>
            name:
            {item.name}
          </div>
          <div>
            {
              item.answers.map((item1, index1) => (
                <div key={index} className="res">
                  <div>
                    question
                    {index1 + 1}
                    :
                  </div>
                  <div>
                    your answer:
                    {item1.answerIds.join(',')}
                  </div>
                  <div>
                    correct:
                    {item1.correct ? 'right answer' : 'wrong answer'}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      ))}

    </div>
  );
};

export default QuestionItem;
