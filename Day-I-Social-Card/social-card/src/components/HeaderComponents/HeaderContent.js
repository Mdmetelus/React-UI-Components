import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

function HeaderContent(props) {
    return (
      <React.Fragment >

            <HeaderTitle />

            <h4 className="header Para" > Let 's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun.Once you feel confortable using components you are well o your way to mastering React! </h4>

        </React.Fragment>
    );
}

export default HeaderContent;
