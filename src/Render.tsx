import React from 'react';

const Render = () => {
    return (
        <div>
            <h1>React testing Library Lesson</h1>
            <input type="text"/>
            <button>Click me</button>
            <button>Click me</button>
            <p>Udemy</p>

            <span data-test-id="copyright">React</span>
        </div>
    );
};

export default Render;
