import React from 'react';

export default function About({ match, location, history }) {
    return (
        <div>
            <section>
                <h2>About Page.</h2>
                <p>This bunny app was created with care by Stephanie Fitzgerald and Anwar Montasir.</p>
                <p>We like bunnies. We like cats dressed as bunnies even better.</p>
            </section>
        </div>
    );
}