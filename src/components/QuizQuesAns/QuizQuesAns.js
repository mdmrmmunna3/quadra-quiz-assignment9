import { EyeIcon } from '@heroicons/react/24/solid';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from '../Option/Option';


const QuizQuesAns = ({ quizQuesList }) => {
    const { question, correctAnswer, options } = quizQuesList;

    const showToastMessage = () => {
        toast.success(correctAnswer, {
            position: toast.POSITION.TOP_CENTER
        });
    };

    return (
        <div className='mt-6 lg:mx-16 border border-gray-300 rounded'>
            <p className='text-center mt-4 mb-5'>{question}</p>

            <div>
                <div className='relative mb-4'>
                    <div className=' absolute right-0'>
                  
                        <EyeIcon onClick={showToastMessage} className='text-4xl h-6'></EyeIcon> 
            
                    <ToastContainer />
                    </div>
                </div>

                {
                    options.map(option => <Option
                        key={options.indexOf(option)}
                        option={options}
                        correctAnswer={correctAnswer}></Option>)
                }

            </div>

        </div>
    );
};

export default QuizQuesAns;

