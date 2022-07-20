import React, {Component, Fragment} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {withStyles} from "@material-ui/core";
import {styleSheet} from "../carAdd/style";

class CarView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <h1>Hello</h1>
                <TableContainer>
                    <Table style={{backgroundColor:'red'}} >
                        <TableHead >
                            <TableRow>
                                <TableCell>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </Fragment>
        )
    }
}
export default withStyles(styleSheet)(CarView)