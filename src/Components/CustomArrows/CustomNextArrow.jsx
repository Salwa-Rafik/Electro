import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

function CustomNextArrow(props) {
    const { onClick } = props;
    return (
        <button
        className="custom-next-arrow absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
        onClick={onClick}
      >
        Next
      </button>
    );
}

export default CustomNextArrow;
