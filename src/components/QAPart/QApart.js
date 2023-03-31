import React from 'react'
import './QApart.css'

const QApart = () => {
    return (
        <div className='qa_container'>
            <div className="qa_info">
                <h2 className="qa_title text-gradient">Question and Answer Part</h2>

                <div className="qa">
                    <h3 className="qa_qus">Qus: Defference between Props and State ?</h3>
                    <p className="qa_ans"><span className='text-gradient'>Ans: </span> &nbsp;
                        Here are some defference between props and state : <br /><br />
                        1. Props are used to send data parents to child components. While, State use to managed data within components. <br />
                        2. We can't change Props value. On the other hand, We can change state value.
                    </p>
                </div>

                <div className="qa">
                    <h3 className="qa_qus">Qus: How does useeffect work ?</h3>
                    <p className="qa_ans"><span className='text-gradient'>Ans: </span> &nbsp;
                        The useEffect hook is a built-in React hook. It allows to run some code after the component has rendered. The hook takes two arguments, the first is the function to run, and the second is an array of dependencies that will trigger the function to run again if they change.
                    </p>
                </div>

                <div className="qa">
                    <h3 className="qa_qus">Qus: What else can UseEffect do except loading data ?</h3>
                    <p className="qa_ans"><span className='text-gradient'>Ans: </span> &nbsp;
                        Without loading data it is used to perform side effects such as fetching data, updating data, triggered animation, set up event listeners etc.
                    </p>
                </div>

                <div className="qa">
                    <h3 className="qa_qus">Qus: How does react work ?</h3>
                    <p className="qa_ans"><span className='text-gradient'>Ans: </span> &nbsp;
                        React uses a virtual DOM to build dynamic user interfaces. Inside react app we have node modules dependencies and packages file. These files helps to make code easier. We can easily import any module in our code and use it. In react we can create components for divided our code in small pices. It's make our code easier to understand and clean. In react we can easily manage, update, pass, store data in our site using differnce react hooks.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default QApart