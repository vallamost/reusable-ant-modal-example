import React, { useEffect, useState, Fragment } from 'react'
import DisplayExpenses from '../components/DisplayExpenses';
import DeleteModal from '../components/DeleteModal';
import { Layout } from 'antd';

import uuid from 'react-uuid'

var Sentencer = require('sentencer');

console.log(Sentencer.make("This sentence has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it."))

export default function MainApp() {

    const [expenses, updateExpenses] = useState([
        {
            "id": uuid(),
            "name": Sentencer.make("{{ noun }}"),
            "amount": 53.22,
        },
        {
            "id": uuid(),
            "name": Sentencer.make("{{ noun }}"),
            "amount": 76.16,
        },
        {
            "id": uuid(),
            "name": Sentencer.make("{{ noun }}"),
            "amount": 716.16,
        },
    ])

    return (

        <Layout style={{ padding: "2% 2%", backgroundColor: "white" }}>
            <div><h2>Expenses</h2></div>
            <DisplayExpenses expenses={expenses} updateExpensesFn={updateExpenses} />

        </Layout>
    );

}