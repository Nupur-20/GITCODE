import React,{ useEffect,useState } from 'react'
import PropTypes from 'prop-types'

function Problem_statement(props) {
    return (
        <div>
            <div class="card">
                Statement
                <div class="card-body">
                    {props.Problem_statement1}
                </div>
            </div>
            <div class="card">
                Test Cases
                <div class="card-body">
                    {JSON.stringify(props.Test_cases)}
                    {/* {props.Test_cases} */}
                </div>
            </div>
        </div>
    )
}

Problem_statement.propTypes={

}

export default Problem_statement