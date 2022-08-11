import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 40 },
    {
      field: 'lastName',
      headerName: 'Modified',
      width: 100,
      editable: true,
    },
    {
      field: 'lasteditede332',
      headerName: 'Start Date',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      valueGetter: (params: GridValueGetterParams) => `3/31/2022`,
    },
    {
      field: 'lasteditede2',
      headerName: 'End Date',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      valueGetter: (params: GridValueGetterParams) => `3/31/2022`,
    },
    {
      field: 'firstName',
      headerName: 'Engagement Status',
      width: 140,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Dealsheet Status',
      
      width: 140,
      editable: true,
    },
    {
      field: 'lastedited',
      headerName: 'Pay Rate',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      valueGetter: (params: GridValueGetterParams) => `$80`,
    },    {
      field: 'lasteditede',
      headerName: 'Bill Rate',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      valueGetter: (params: GridValueGetterParams) => `$150`,
    },
    {
      field: 'fullName',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) => `view`,
    },
  ];

  const rows = [
    { id: 1, lastName: '4/6/2022', firstName: 'active', age: 'active' },
    { id: 2, lastName: '4/5/2022', firstName: 'cleared', age: 'draft' },
    { id: 3, lastName: '4/4/2022', firstName: 'credentialed', age: 'draft' },
    { id: 4, lastName: '4/3/2022', firstName: 'placed', age: 'draft' },
    { id: 5, lastName: '4/2/2022', firstName: 'offered', age: 'draft' },
    { id: 6, lastName: '4/1/2022', firstName: 'interviewing', age: 'draft' },
    { id: 7, lastName: '3/3/2022', firstName: 'submitted', age: 'draft' },
    { id: 8, lastName: '2/3/2022', firstName: 'ready', age: 'draft' },
    { id: 9, lastName: '1/3/2022', firstName: 'pending', age: 'draft' },
  ];

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={'xl'}
        maxWidth={'xl'}
      >
        <DialogTitle>History</DialogTitle>
        <DialogContent>
          <DialogContentText>
            John Smith Focus Connect 1/1/2022 - 3/31/2022
          </DialogContentText>
          <Box sx={{ height: 800, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
