import React from 'react';
import Option from '../Option/Option';


const QuizQuesAns = ({ quizQuesList }) => {
    const { question, correctAnswer, options } = quizQuesList;
    return (
        <div className='mt-6 border'>
            <p className='text-center mt-4 mb-5'>{question}</p>

            <div className=''>
                {
                    options.map(option => <Option
                        key={option.index}
                        option={option}></Option>)
                }
            </div>

        </div>
    );
};

export default QuizQuesAns;