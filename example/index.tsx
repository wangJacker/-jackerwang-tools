import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { accAdd } from '../.';

const App = () => {

    console.log(accAdd(2, 3))
    return (
        <div>
            {/* <Thing />
      我 */}
      我是组件模板
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
