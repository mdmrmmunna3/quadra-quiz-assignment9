import React from 'react';

const Blog = () => {
    return (
        <div className=' lg:mx-16 my-4'>
            <div className='border py-10 mb-5 rounded' style={{ backgroundColor: '#5c2180' }}>
                <h3 className='text-center text-3xl mb-3 text-blue-500 font-semibold'>1. What is the purpose of react router?</h3>
                <p className='mb-8 text-white px-3'>
                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                </p>
            </div>
            <div className='border py-10 mb-5 rounded' style={{ backgroundColor: '#5c2180' }}>
                <h3 className='text-center text-3xl mb-2 text-blue-500 font-semibold'>2. How does Context Api works?</h3>
                <p className='mb-8 text-white px-3'>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </div>

            <div className='border py-10 mb-5 rounded' style={{ backgroundColor: '#5c2180' }}>
                <h3 className='text-center text-3xl mb-2 text-blue-500 font-semibold'>3. What is useRef hooks in React and how does work?</h3>
                <p className='text-white px-3'>
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.Use useRef if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.The returned object will persist for the full lifetime of the component. Why we use useRef instead of useState?
                    useState returns 2 properties or an array. One is the value or state and the other is the function to update the state. In contrast, useRef returns only one value which is the actual data stored. When the reference value is changed, it is updated without the need to refresh or re-render.useRef is a synchronous hook .
                </p>
            </div>

        </div>
    );
};

export default Blog;