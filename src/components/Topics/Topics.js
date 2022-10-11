import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';

const Topics = () => {
    const quizContainer = useLoaderData()
    const allQuiz = quizContainer.data;
    console.log(allQuiz);
    return (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:mx-16'>
            {
                allQuiz.map(quizData => <Quizs
                    key={quizData.id}
                    quizData={quizData}
                ></Quizs>)
            }
        </div>
    );
};

export default Topics;