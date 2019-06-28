import React from 'react';
import Aux from '../../hoc/Aux';
import Classes from './Layout.css';
const layout = (props) => ( 
    <Aux>
         <div className={Classes.Content}> Toolbar, sidebar, backdrop</div>
         <main>{props.children}</main>
    </Aux>
);

export default layout;

/*
import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
*/
