import React, { useState } from "react"
import { Table } from "./Table"
import { TableAdminBar } from "components/admin/TableAdminBar/TableAdminBar";
import { users } from "./mock-data";
export const TablePage = () => {
    //if screen => use different paddings(or container)
    //=> admin, screen, judge

    const [role, setRole] = useState(localStorage.getItem('role'));

    //users that were inputed by admin
    const mockUsers = users;

    if (role === "ADMIN")
        return (
        <div className="small-container">
            <TableAdminBar users={mockUsers}/>
            <Table users={mockUsers} role={role}/>
        </div>
        )
    else if (role === "SCREEN")
        return (
            <Table users={mockUsers} role={role}/>
        )
    else if (role === "JUDGE")
        return (
            // тут можно написать контейнер для свайпера
            <Table users={mockUsers} role={role}/>

        )




}