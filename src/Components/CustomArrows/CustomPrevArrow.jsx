import React from 'react';
import { BsChevronLeft } from "react-icons/bs";

function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="slick-arrow slick-prev" onClick={onClick}>
            <BsChevronLeft style={{ color: 'red' }} />
        </div>
    );
}

export default CustomPrevArrow;
