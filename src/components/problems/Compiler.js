import React from 'react'
import PropTypes from 'prop-types'

function Compiler(props) {
    const compile=() => {
        fetch('https://api.example.com/create',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: 'someData' }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data here
                console.log(data);
            })
            .catch((error) => {
                // Handle any errors here
                console.error(error);
            });
    }
    return (

        // <div>
        //     <center>
        //         <h1>Online IDE</h1>
        //         <form id="myform" name="myform" method="post" action="compilecode">
        //             <h3>Code</h3>
        //             <textarea rows="13" cols="100" id="code" name="code"></textarea>
        //             <br />
        //             <h3>Input</h3>
        //             <textarea rows="10" cols="100" id="input" name="input"></textarea>
        //             <br />
        //             Language :
        //             <select name="lang">
        //                 <option value="C">C</option>
        //                 <option value="Java">Java</option>
        //                 <option value="Python">Python</option>
        //             </select>
        //             Compile With Input :
        //             <input type="radio" name="inputRadio" id="inputRadio" value="true" />yes
        //             <input type="radio" name="inputRadio" id="inputRadio" value="false" />No
        //             <br />
        //             <input type="submit" value="submit" name="submit" />
        //         </form>
        //     </center>
        // </div>
        <div data-pym-src="https://www.jdoodle.com/a/7wtc">hi</div>
    )
}

Compiler.propTypes={

}

export default Compiler