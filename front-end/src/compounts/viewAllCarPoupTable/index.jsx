import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';

import carService from "../../services/CarService";

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
    { id: 'vehicleId', label: "CarId", minWidth: 170 },
    { id: 'vehicleType', label: "Vehicle Type", minWidth: 100 },
    {id: 'brand', label: 'Brand', minWidth: 170, align: 'right'},
    {id: 'numOfPassenger', label: "numOfPassenger", minWidth: 170, align: 'right'},
    {id: 'transmissionType', label: 'Transmission Type', minWidth: 170, align: 'right'},
    {id: 'fuelType', label: 'FuelType', minWidth: 170, align: 'right'},
    {id: 'dailyPrice', label: 'Daily Price', minWidth: 170, align: 'right'},
    {id: 'monthlyPrice', label: 'Monthly Price', minWidth: 170, align: 'right'},
    {id: 'dailyFreeKm', label: 'Daily Free Km', minWidth: 170, align: 'right'},
    {id: 'monthlyFreeKm', label: 'Monthly FreeKm', minWidth: 170, align: 'right'},
    {id: 'priceOfExtraKm', label: 'Price Of ExtraKm', minWidth: 170, align: 'right'},
    {id: 'registerNumber', label: 'Register Number', minWidth: 170, align: 'right'},
    {id: 'color', label: 'Color', minWidth: 170, align: 'right'},
];

function createData(vehicleId,vehicleType,brand,numOfPassenger,transmissionType,fuelType,dailyPrice,
                    monthlyPrice,dailyFreeKm ,monthlyFreeKm ,priceOfExtraKm,
                    registerNumber,color) {

    return { vehicleId,vehicleType,brand,numOfPassenger,transmissionType,fuelType,dailyPrice,
        monthlyPrice,dailyFreeKm ,monthlyFreeKm ,priceOfExtraKm,
        registerNumber,color };
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



export default function ViewAllCarPopUpTable(props) {

    const loadCarDetails=async (vehicleId,vehicleType,brand,numOfPassenger,transmissionType,fuelType,dailyPrice,
                                monthlyPrice,dailyFreeKm ,monthlyFreeKm ,priceOfExtraKm,
                                registerNumber,color) =>{

        let frontImage;
        let backImage;
        let sideImage;
        let interiorImage;

        let res1 = await carService.getCarImage(vehicleId,"Front");
        if (res1.status===200) {
            frontImage=URL.createObjectURL(res1.data)
        }
        let res2 = await carService.getCarImage(vehicleId,"Back");
        if (res1.status===200) {
            backImage=URL.createObjectURL(res2.data)
        }
        let res3 = await carService.getCarImage(vehicleId,"Side");
        if (res1.status===200) {
            sideImage=URL.createObjectURL(res3.data)
        }
        let res4 = await carService.getCarImage(vehicleId,"Interior");
        if (res1.status===200) {
            interiorImage=URL.createObjectURL(res4.data)
        }
        props.data.changeStateCarDetails(vehicleId,vehicleType,brand,numOfPassenger,transmissionType,fuelType,dailyPrice,
            monthlyPrice,dailyFreeKm ,monthlyFreeKm ,priceOfExtraKm,
            registerNumber,color,frontImage,backImage,sideImage,interiorImage);

    }


    const getAllCars=async () =>{

        rows.length=0;

        let res = await carService.getAllCar();
        if (res.data.code!==undefined){
            var i=0;
            for (let dataKey of res.data.data) {
                rows[i]=createData(dataKey.vehicleId,dataKey.vehicleType,dataKey.brand,dataKey.numOfPassenger,dataKey.transmissionType,dataKey.fuelType,dataKey.dailyPrice,dataKey.monthlyPrice,dataKey.dailyFreeKm,dataKey.monthlyFreeKm,dataKey.priceOfExtraKm,dataKey.registerNumber,dataKey.color)
                i++;
            }
            setShow(true)
        }else {
            alert("car is not found ");
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


            <Button variant="primary" onClick={() => {

                getAllCars();

            }}>
                View All Cars
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
                        Custom Modal Styling
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
                                                style={{ minWidth: column.minWidth }}
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
                                                          await loadCarDetails(row.vehicleId,row.vehicleType,row.brand,row.numOfPassenger,row.transmissionType,row.fuelType,row.dailyPrice,row.monthlyPrice,row.dailyFreeKm,row.monthlyFreeKm,row.priceOfExtraKm,row.registerNumber,row.color);
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