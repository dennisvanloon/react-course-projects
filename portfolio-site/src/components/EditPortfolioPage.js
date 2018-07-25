import React from 'react';

const EditPortfolioPage = (props) => (
    <div>
        <h1>This is the edit portfolio page</h1>
        <p>This is  {props.match.params.id}</p>
    </div>
);

export default EditPortfolioPage;