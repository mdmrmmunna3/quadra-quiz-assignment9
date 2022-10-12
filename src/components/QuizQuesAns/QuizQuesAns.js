import React from 'react';
import Option from '../Option/Option';


const QuizQuesAns = ({ quizQuesList }) => {
    const { index, question, correctAnswer, options } = quizQuesList;
    
    return (
        <div className='mt-6 lg:mx-16 border border-gray-300 rounded'>
            <p className='text-center mt-4 mb-5'>{question}</p>

            <div className=''>
                {
                    options.map(option => <Option
                        key={option[index]}
                        option={option}></Option>)
                }
            </div>

        </div>
    );
};

export default QuizQuesAns;