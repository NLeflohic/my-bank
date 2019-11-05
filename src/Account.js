import React from "react";
import Button from "./Button";

const Account = (props) => {
    console.log(props.tabAccounts);
    const tabAccounts = props.tabAccounts;
    const background = props.background;
    return (
        <div className="accounts">
            <div className="identification" style={{ "background-color": background }}>
                <span className="account-name">{tabAccounts.name}</span>
                <span className="account-balance">{tabAccounts.balance}</span>
            </div>
            <div className="operations">
                <ul>
                    {tabAccounts.operations.map((item, index) => {
                        return <li key={index}>
                            <div className="line">
                                <span className="date">{item.date} </span>
                                <span className="description">{item.description}</span>
                                <span className="amount">{item.amount}</span>
                            </div>

                        </li>
                    })}
                </ul>
            </div>
            <Button></Button>
        </div>
    );
}

export default Account;