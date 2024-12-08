
import React, { useEffect, useState } from 'react'
import { endpoint } from '../../../Constants/Data.constant'
import { getData, postData, putData } from '../../../Services/Ops'
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Modal, Typography } from '@mui/material';
import Swal from 'sweetalert2';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function EmployeeList(props) {

    const [userList, setUserList] = useState([])
    const [open, setOpen] = useState(false);

    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [errors, setErrors] = useState({ email: '', password: '', location: '' });
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [roleId, setRoleId] = useState("")
    const [reportsToId, setReportsToId] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [selectedData, setSelectedData] = useState({})
    const [editData, setEditData] = useState({})


    useEffect(() => {
        getAllEmployeeList()
    }, [props])
    const getAllEmployeeList = async () => {
        let url = endpoint + 'users';
        let result = await getData(url)
        console.log("users list========>",result)
        let arr = []
        result.map((item, index) => {
            arr.push({
                id: item.id,
                name: item.name,
                email: item.email,
                location: item.location,
                roleId: item.role_id,
                reportsToId: item.reports_to_id,
                action: ""
            })
        })
        setUserList(arr)
    }
   
    const columns = [
        { field: 'id', headerName: 'ID', headerClassName: 'black-header' },
        { field: 'name', headerName: 'Name', headerClassName: 'black-header' },
        { field: 'email', headerName: 'Email', cellClassName: 'black-background' },
        { field: 'location', headerName: 'Location', },
        {
            field: 'action', headerName: 'Action',
            renderCell: (params) => (
                <div style={{ gap: '8px' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => handleEdit(params.row)}
                    >
                        Edit
                    </Button>
                </div>
            )
        }
    ];
    const paginationModel = { page: 0, pageSize: 5 };
 

    const handleEdit = async (item) => {
        let url = endpoint + 'users/' + item.id+ '/edit'
        let result = await getData(url);
        setEditData(result);
        console.log("itemitemitemitemitemitem=========", item)
        // if (editResult?.status == 200 || editResult.status == 201) {
        setSelectedData(item)
        setEmail(item.email)
        setName(item.name)
        setLocation(item.location)
        setReportsToId(item.reportsToId)
        setRoleId(item.roleId)
        setOpen(true)
        // }


    }

    const validate = () => {
        let isValid = true;
        const newErrors = { email: '', password: '' };

        // Email validation
        if (!email) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email format.';
            isValid = false;
        }

        // Password validation
        if (!name) {
            newErrors.name = 'Name is required.';
            isValid = false;
        }
        //
        if (!location) {
            newErrors.location = 'Location is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const onUpdateSubmit = async (e) => {
        try { 
            e.preventDefault();
            if (!validate()) return;
            setIsLoading(true)

            let body = {
                "name": name,
                "email": email,
                "location": location,
                "reportsToId":Number(reportsToId),
                "roleId": Number(roleId)
            }
            console.log(body)
            let url = endpoint + 'users/' + selectedData.id 
            let result = await putData(url, body)
            setOpen(false)
            // if (result?.status == 200 || result.status == 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Update Successful!',
                    text: 'Welcome back!',
                    timer: 1500,
                    showConfirmButton: false
                });
                getAllEmployeeList();

             
        } catch (error) {
            // Handle network or server errors
            console.error('Error during login:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong. Please try again later.',
            });
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <section className="content" style={{ background: 'black !important' }}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Update User
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        <div className="login-box">
                            <div className="login-box-body" style={{ borderWidth: 2 }}>
                                <p className="login-box-msg">Welcome to Sign in</p>

                                <form id="dataform" onSubmit={onUpdateSubmit}>
                                    <div className="form-group has-feedback">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        {/* <span className="glyphicon glyphicon-lock form-control-feedback"></span> */}
                                        {errors.name && <p className="text-danger">{errors.name}</p>}
                                    </div>
                                    <div className="form-group has-feedback">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {/* <span className="glyphicon glyphicon-envelope form-control-feedback"></span> */}
                                        {errors.email && <p className="text-danger">{errors.email}</p>}
                                    </div>

                                    <div className="form-group has-feedback">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Location"
                                            id="location"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                        {/* <span className="glyphicon glyphicon-number form-control-feedback"></span> */}
                                        {errors.location && <p className="text-danger">{errors.location}</p>}
                                    </div>
                                    <div className="form-group has-feedback">
                                        <select
                                            key={editData?.possibleSupervisors}
                                            className="form-control"
                                            value={reportsToId}
                                            onChange={(e) => setReportsToId(e.target.value)}
                                        >
                                            {userList?.map((item, index) => {
                                                return <option value={item.id}>{item.name}</option>
                                            })}
                                        </select>
                                        {/* <span className="glyphicon glyphicon-number form-control-feedback"></span> */}
                                        {errors.reportsToId && <p className="text-danger">{errors.reportsToId}</p>}
                                    </div>
                                    <div className="form-group has-feedback">
                                        <select
                                            key={editData.roles}
                                            className="form-control"
                                            value={roleId}
                                            onChange={(e) => setRoleId(e.target.value)}
                                        >
                                            {editData?.roles?.map((item, index) => {
                                                return <option value={item.id}>{item.name}</option>
                                            })}
                                        </select>
                                        {/* <span className="glyphicon glyphicon-number form-control-feedback"></span> */}
                                        {errors.roleId && <p className="text-danger">{errors.roleId}</p>}
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-4">
                                            {!isLoading ? (
                                                <button className="btn btn-primary btn-block btn-flat" type="submit">
                                                    Sbmit
                                                </button>
                                            ) : (
                                                <button className="btn btn-primary btn-block btn-flat" disabled>
                                                    Loading...
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Typography>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="error"
                        sx={{ mt: 2 }}
                    >
                        Close
                    </Button>
                </Box>
            </Modal>


            <Paper sx={{ height: 400, width: 550, background: 'black !important' }} >
                <DataGrid
                    rows={userList}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{
                        border: 0,
                        '& .MuiDataGrid-columnHeaders': {
                            backgroundColor: 'black !important', // Header row background
                        },
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: 'black !important', // Individual column header cells
                            color: 'white !important',
                            fontWeight: 'bold !important',
                            textAlign: 'center !important',
                        },
                        '& .MuiDataGrid-cell': {
                            backgroundColor: 'black !important', // Cell background
                            color: 'white !important',
                        },
                        '& .MuiDataGrid-row': {
                            backgroundColor: 'black !important', // Row background
                            '&:hover': {
                                backgroundColor: '#333 !important', // Hover effect
                            }
                        },
                    }}
                />
            </Paper>


        </section>

    )
} 