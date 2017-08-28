import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div>
            Welcome to Cute Bunnies!
            <Link to="/images"><button>Checkout the cute bunnies</button> </Link>
            <Link to="/about"><button>About the bunnies</button> </Link>
        </div>
    );
}