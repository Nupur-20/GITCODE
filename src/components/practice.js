// import React from 'react'
import PropTypes from 'prop-types'
import React,{ useEffect,useState } from "react";
import Problem_list from './problems/Problem_list';


function Practice(props) {
    const [Data,setData]=useState([]);

    const fetchData=async () => {
        // console.log("hi");
        // return await fetch("http://localhost:5000/api/problems/lc")
        //     .then((response) => response.json())
        //     .then((dat) => setData(dat));
        return await fetch("http://localhost:5000/api/problems/all")
            .then((response) => response.json())
            .then((dat) => setData(dat));
    }
    useEffect(() => {
        fetchData();
    },[])

    return (
        <>
            <h1>Problems</h1>
            <ol class="list-group list-group-numbered">
                <li>
                    {Data&&Data.length>0&&Data.map((item) => (
                        // <li key={item._id}>{item.playlist}-----{item.user}</li>
                        <Problem_list title={item.P_title} total_submissions={item.Total_Submissions} correct_submissions={item.Correct_Submissions} tag={item.Tag} problem_statement={item.Statement} test_cases={item.Test_cases} />
                    ))}
                </li>
            </ol>
        </>
    );
}

Practice.propTypes={

}

export default Practice

