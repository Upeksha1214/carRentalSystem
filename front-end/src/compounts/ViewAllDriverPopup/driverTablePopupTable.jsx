import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';

import driverService from "../../services/driverService";

import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";


const columns = [
    {id: 'driverId', label: "Id", minWidth: 170},
    {id: 'driverEmail', label: "Email", minWidth: 100},
    {id: 'contactNumber', label: 'Contact Number', minWidth: 170, align: 'right'},
    {id: 'licenseNumber', label: 'License Number', minWidth: 170, align: 'right'},
    {id: 'address', label: 'Address', minWidth: 170, align: 'right'},
];

function createData(driverId, driverEmail, contactNumber, licenseNumber, address) {
    return {
        driverId, driverEmail, contactNumber, licenseNumber, address
    };
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const rows = [];


function DriverPopUpTable(props) {

    const loadDriverDetails=async (driverId, driverEmail, contactNumber,licenseNumber, address) =>{
        let frontImage=null;
        let backImage=null;


        let res1 = await driverService.getDriverIdImage(driverId,"Front");
        if (res1.status==200) {
            frontImage=URL.createObjectURL(res1.data)
        }
        let res2 =  await driverService.getDriverIdImage(driverId,"Back");
        if (res1.status==200) {
            backImage=URL.createObjectURL(res2.data)
        }

        props.data.changeStateDriverDetails(driverId, driverEmail, contactNumber,licenseNumber, address, frontImage,backImage);

    }


    const getAllDrivers = async () => {
        rows.length=0;
        let res = await driverService.getAllDrivers();
        if (res.data.code == 200) {

            var i = 0;
            for (let dataKey of res.data.data) {
                rows[i] = createData(dataKey.driverId, dataKey.email, dataKey.contactNumber,
                     dataKey.drivingLicence, dataKey.address)
                i++;
            }
            setShow(true);
        }
    }

    const [show, setShow] = useState(false);
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            {/* <div>{props.data.unit}</div>*/}

            <Button variant="primary" onClick={async () => {
                  await getAllDrivers();

            }}>
                View All Drivers
            </Button>
            <Modal
                size={"xl"}
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Driver Details Table
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*{/table/}*/}
                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                            < Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{minWidth: column.minWidth}}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody


                                >
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}

                                                      onClick={async () =>{
                                                           await loadDriverDetails(row.driverId, row.driverEmail, row.contactNumber, row.licenseNumber, row.address)

                                                          setShow(false)
                                                      }
                                                      }
                                            >
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}
                                                        >
                                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default DriverPopUpTable;