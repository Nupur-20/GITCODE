import React,{ useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import MyContext from '../../context/Mycontext';


function Problem_list(props) {
    const sharedData=useContext(MyContext);
    const title=props.title;
    const total=props.total_submissions;
    const correct=props.correct_submissions;
    const tag=props.tag;
    const statement=props.problem_statement;
    const cases=props.test_cases;
    const code=props.code;
    const hiddencases=props.hiddencases;
    const verified=props.verified;
    const func1=async () => {
        await sharedData.set_statement(statement);
        await sharedData.set_cases(cases);
        await sharedData.set_hiddencases(hiddencases);
        await sharedData.set_verified(verified);
    }
    return (
        <>
            <div>
                <li class="list-group-item d-flex justify-content-between align-items-start mx-3 my-2 ">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">
                            <Link onClick={func1} to="/problem_statement">
                                {title}
                            </Link>
                        </div>
                        {tag}
                        <br />
                        {verified? "verified":"Not verified"}
                    </div>
                    <span class="badge bg-primary rounded-pill">{correct}</span>
                </li>
            </div>
        </>
    )
}

Problem_list.propTypes={

}

export default Problem_list