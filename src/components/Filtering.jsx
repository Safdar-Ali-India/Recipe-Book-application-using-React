import React from 'react';

const Filter = ({ handleFilter }) => {
    const handleChange = (e) => {
        handleFilter(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-1"
        />
    );
};

export default Filter;
