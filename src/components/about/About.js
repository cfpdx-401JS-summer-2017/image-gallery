import React from 'react';
import { Link } from 'react-router-dom';

export default function About(){
    return(
        <div>
            About Bunnies:
            They are so cute.
            <Link to="/images"><button>Checkout the cute bunnies</button> </Link>
            <Link to="/"><button>Home</button> </Link>
        </div>
    );
}