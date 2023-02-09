import React from 'react';

export default function Button({ onClick, text }) {
    return (
        <button
            className={
                'text-sm text-white cursor-pointer rounded-md border border-white px-2 py-1'
            }
            onClick={onClick}
        >
            {text}
        </button>
    );
}
