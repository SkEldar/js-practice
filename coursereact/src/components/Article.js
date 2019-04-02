import React from 'react';

function Article() {
    const body = <section>body</section>
    return(
        <div>
            <h2>title</h2>
            {body}
            <h3>creation date is {(new Date().toDateString())}</h3>
        </div>
    )
}