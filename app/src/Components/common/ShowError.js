import React from 'react';

export default function ShowError({ error }) {
    return error ? <pre style={{ color: 'red' }}>{error}</pre> : null;
}