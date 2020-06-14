import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
var Sentencer = require('sentencer');

export default function AddExpense(props) {

    const current_expenses = Object.values(props.expenses);

    const newExpense = {
        "id": uuid(),
        "name": Sentencer.make("{{ noun }}"),
        "amount": (Math.random() * 1000).toFixed(2),
    }

    current_expenses.push(newExpense)

    const newExpenseState = current_expenses

    props.updateExpensesFn(newExpenseState)

}