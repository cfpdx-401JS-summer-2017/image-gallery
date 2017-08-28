import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div>
        <div>
            <img src="https://emojipedia.org/static/img/logo/emojipedia-logo-140.0d779a8a903c.png" alt="emojipedia logo" />
            <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/heavy-plus-sign_2795.png" alt="plus sign"/>
            <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" alt="Wikipedia logo" />
        </div>
        <Link to="/about">read more...</Link>
    </div>
  );
}
