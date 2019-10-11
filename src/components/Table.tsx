import React, {Component, useState, useEffect} from 'react';
import {Login} from "../api/ajax"
import {Table} from "antd";
interface IState {
    columns : any,
    tableData : any
}
class XTable extends React.Component {

    state : IState = {
        columns: [],
        tableData: []
    }

    componentDidMount() {
        Login({name: "zs", age: 20}).then((res) => {
            if (res.success) {
                this.setState({columns: res.data.headers, tableData: res.data.tableData})
            }
        })
    }
    render() {
        const rowSelection = {
            onChange: (selectedRowKeys : any, selectedRows : any) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: (record : any) => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name
            })
        };
        return (<Table
            rowSelection={rowSelection}
            columns={this.state.columns}
            dataSource={this.state.tableData}
            size="small"/>)
    }
}

export default XTable;
