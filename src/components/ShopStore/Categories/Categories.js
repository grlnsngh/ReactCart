import React from 'react';
import './style.css';

const Categories = prosp => {
    return (
        <React.Fragment>
            <span>Categories</span>
            <ul class="CategoryList">
                <li>
                    <span>
                        <a href="products/shirts">Shirts</a>
                    </span>
                    <ul>
                        <li><a href="products/Footwear">Chappalein</a></li>
                        <li><a href="products/Ice-creams">Kulfiyan</a></li>
                    </ul>
                    </li>
            </ul>
        </React.Fragment>
    );
}

export default Categories;

