import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>This is the portfolio page</h1>
        <Link to='/portfolio/123'>Item One</Link><br/>
        <Link to='/portfolio/456'>Item Two</Link>
    </div>
);

export default PortfolioPage;