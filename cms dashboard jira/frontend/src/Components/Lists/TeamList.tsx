import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import { MdCreateNewFolder } from "react-icons/md";
import Typography from "@mui/material/Typography";
import CreateTeamModal from "../Modals/CreateTeamModal";
import ProjectDetailModal from "../Modals/ProjectDetailModal";
import { useQuery } from "react-query";
import axios from "axios";
import { baseURL } from "../../utils/api";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Actions",
    headerName: "Actions",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    renderCell: (params: any) => {
      const [open, setOpen] = useState(false);
      const handleOpenModal = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
      return (
        <>
          <Tooltip title="Overview">
            <IconButton onClick={handleOpenModal}>
              <BiSolidMessageRoundedDetail />
            </IconButton>
          </Tooltip>
          <ProjectDetailModal
            open={open}
            handleOpen={handleOpenModal}
            handleClose={handleClose}
          />
        </>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const TeamList = () => {
  return (
    <>
      <div>
        <CreateTeam />
        <Box
          sx={{
            height: 500,
            width: "80%",
            marginTop: "5vh",
            marginLeft: "2vw",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </>
  );
};

const CreateTeam = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className=" mt-6 flex justify-around">
        <Typography
          sx={{ color: "grey", visibility: "hidden" }}
          variant="h6"
          gutterBottom
        >
          Projects
        </Typography>
        <Button
          onClick={handleOpenModal}
          variant="contained"
          startIcon={<MdCreateNewFolder />}
        >
          Create
        </Button>
        <CreateTeamModal
          open={open}
          handleOpen={handleOpenModal}
          handleClose={handleClose}
        />
      </div>
    </>
  );
};

export default TeamList;
