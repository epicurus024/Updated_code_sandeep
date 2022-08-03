import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Home = () => {
    return (
        <main>
            <section className='my-5'>
                <header>
                    <h1>
                        <FontAwesomeIcon icon={faPizzaSlice} rotation={270} className="me-2"/>
                        Movie Bar
                    </h1>
                </header>
                <hr/>
                <p>
                    Welcome to Movie Bar. You can find your favourite movies and check them out.
                    <div className="my-3">
                        <small>
                            <strong>NOTE</strong>: You can even add movies to your favorites list.
                        </small>    
                    </div> 
                </p>
            </section>
        </main>
    )
};

export default Home;