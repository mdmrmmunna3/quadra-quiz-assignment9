import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuesAns from '../QuizQuesAns/QuizQuesAns';

const Quiz = () => {
    const quizQuesAnsList = useLoaderData();
    
    const quizQuesAns = quizQuesAnsList.data.questions ;
    console.log(quizQuesAns)
    return (
        <div>
            <h2 className='text-blue-500 text-center font-bold mt-4 text-xl md:text-2xl lg:text-3xl'>Name of Quiz: {quizQuesAnsList.data.name}</h2>
            {
                quizQuesAns.map(quizQuesList => <QuizQuesAns
                     key={quizQuesList.id} 
                     quizQuesList={quizQuesList}
                     ></QuizQuesAns>)
            }
        </div>
    );
};

export default Quiz;