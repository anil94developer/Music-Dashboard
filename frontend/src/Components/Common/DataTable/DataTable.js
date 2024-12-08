
import React, { useEffect, useState } from 'react'
import { endpoint } from '../../../Constants/Data.constant'
import { getData, postData, putData } from '../../../Services/Ops'
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Modal, Typography } from '@mui/material';
  
export default function DataTable(props) {
    const {columns, height,width,rows,checkboxSelection=false}=props;
   
    const paginationModel = { page: 0, pageSize: 5 };


    return ( 
        <Paper sx={{ height: height, width: width, background: 'black !important' }} >
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection={checkboxSelection}
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


    )
} 