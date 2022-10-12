import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from '../../imges/quiz-banaer.jpg'
import Quizs from '../Quizs/Quizs';


const Home = () => {
    const allQuizs = useLoaderData();
    const allQuiz = allQuizs.data;

    return (
        <div>
            <div>
                <img className='w-full h-48 sm:h-42' src={logo} alt="" />
                <p className='text-gray-400 lg:mx-16'>CSS animations are an essential part of a project and they can be hard. As I mentioned earlier for dashboards, sometimes the cost of purchasing the pre-built stuff is less than doing it from scratch. If you are in a similar situation, you can check out these incredible CSS animations . You can test your JavaScript, React, Css and other also skills with Quadra-quiz-contest. There are a list of  quizzes that will clear your concepts. Our quiz covers fundamentals, advance concepts.</p>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:mx-16'>
                {
                    allQuiz.map(quiz => <Quizs
                        key={quiz.id}
                        quiz={quiz}
                    ></Quizs>)
                }
            </div>
        </div>
    );
};

export default Home;