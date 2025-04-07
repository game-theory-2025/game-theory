// src/SortSelection.jsx
import React from 'react';

function SortSelection({ sortMethod, setSortMethod }) {
  return (
    <div className='flex items-center gap-4'>
      <label>
        <input
          type="radio"
          value="merge_sort"
          checked={sortMethod === 'merge_sort'}
          onChange={() => setSortMethod('merge_sort')}
        />
        Merge Sort
      </label>
      <label>
        <input
          type="radio"
          value="merge_insertion_sort"
          checked={sortMethod === 'merge_insertion_sort'}
          onChange={() => setSortMethod('merge_insertion_sort')}
        />
        Merge Insertion Sort
      </label>
    </div>
  );
}

export default SortSelection;