import React, { useState } from "react"
import { Table } from "./Table"
import { Container } from "../container/Container";
import { TableAdminBar } from "components/admin/TableAdminBar/TableAdminBar";
import { users } from "./mock-data";
export const TablePage = () => {
    //if screen => use different paddings(or container)
    //=> admin, screen, judge
    const [role, setRole] = useState("admin");
    //users that were inputed by admin
    const mockUsers = users;

    if (role === "admin")
        return (
        <div className="small-container">
            <TableAdminBar users={mockUsers}/>
            <Table users={mockUsers}/>
        </div>
        )
    else if (role === "screen")
        return (
            <Table users={mockUsers}/>
        )
    else if (role === "judge")
        return <Table users={mockUsers}/>





}