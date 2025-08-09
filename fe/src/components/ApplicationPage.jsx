import CustomAppBar from "@Components/CustomAppBar";
import SideBar from "@Components/SideBar";
import { Grid } from "@mui/material";

const ApplicationPage = ({ Component, sideBarComponent, onSideBarComponentChange }) => {

  return (
    <Grid container size={12}>
      <Grid item xs={12} size={12}>
        <CustomAppBar onSideBarComponentChange={onSideBarComponentChange} />
      </Grid>
      <SideBar onSideBarComponentChange={onSideBarComponentChange} />
      <Grid item xs={10} size={10}>
        <Component />
      </Grid>
    </Grid>
  );

}

export default ApplicationPage;