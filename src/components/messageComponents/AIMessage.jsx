import React from 'react'

function AIMessage({data}) {
    return (
        <div className="userMessage">
            <div className="AIIcon">
                {data.name}
            </div>

            <div className="message hSecondary AIMessage">
                {data.message}
            </div>
        </div>
    );
}

export default AIMessage