import React, { Component } from 'react';
import makeData from "./data";
import ReactTable from "react-table";
import "react-table/react-table.css";

const makeDefaultState = () => ({
  sorted: [],
  page: 0,
  pageSize: 10,
  expanded: {},
  resized: [],
  filtered: [],
  groupByCol: []
});

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = makeDefaultState();

    this.resetState = this.resetState.bind(this);
  }
  resetState() {
    this.setState(makeDefaultState());
  }
  setGroupBy = () => {
    this.setState({
      groupByCol: ["branch","agency"]
    });
  };
  setGroupByAgency = () => {
    this.setState({
      groupByCol: ["agency","branch"]
    });
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.resetState}>Reset State</button>
          <button onClick={this.setGroupBy}>GroupBy Branch</button>
          <button onClick={this.setGroupByAgency}>GroupBy Agency</button>
        </div>
        {/* <pre>
          <code>
            <strong>this.state ===</strong>{" "}
            {JSON.stringify(this.state, null, 2)}
          </code>
        </pre> */}
        <ReactTable
          data={makeData}
          columns={[
            {
              Header: "Agency",
              accessor: "agency",
              filterable:true,
              Aggregated: row => {
                return <span>{row.value}</span>;
              }
            },

            {
              Header: "Patient ID",
              id: "patientID",
              accessor: d => d.patientID,
              width: 170,
              PivotValue: row => <span>{row.value}</span>
            },

            {
              Header: "branch",
              accessor: "branch",
              filterable:true,
              Aggregated: row => {
                return <span>{row.value}</span>;
              }
            },
            {
              Header: "Details",
              accessor: "detail1",
              Aggregated: row => {
                return <span>{row.value}</span>;
              }
            },
            {
              Header: "Details",
              accessor: "detail2",
              Aggregated: row => {
                return <span>{row.value}</span>;
              }
            },
            {
              Header: "Details",
              accessor: "detail3",
              Aggregated: row => {
                return <span>{row.value}</span>;
              }
            }
          ]}
          pivotBy={this.state.groupByCol}
          // filterable
          defaultPageSize={10}
          className="-striped -highlight"
          // Controlled props
          sorted={this.state.sorted}
          page={this.state.page}
          pageSize={this.state.pageSize}
          expanded={this.state.expanded}
          resized={this.state.resized}
          filtered={this.state.filtered}
          // Callbacks
          onSortedChange={sorted => this.setState({ sorted })}
          onPageChange={page => this.setState({ page })}
          onPageSizeChange={(pageSize, page) =>
            this.setState({ page, pageSize })
          }
          onExpandedChange={expanded => this.setState({ expanded })}
          onResizedChange={resized => this.setState({ resized })}
          onFilteredChange={filtered => this.setState({ filtered })}
          defaultFilterMethod={(filter, row, column) => {
            const id = filter.pivotId || filter.id;
            return row[id] !== undefined
              ? String(row[id])
                  .toLowerCase()
                  .indexOf(filter.value.toLowerCase()) !== -1
              : true;
          }}
        />
        <br />
      </div>
    );
  }
}

export default TableComponent;


