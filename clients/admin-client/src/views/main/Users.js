import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import MWRegisterUserForm from "../../components/MWRegisterUserForm";

const Users = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Box p={theme.custom.spacing.card}>
            <Paper>
              <Box p={theme.custom.spacing.cardInner}>
                <MWRegisterUserForm />
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={theme.custom.spacing.card}>
            <Paper>
              <Box p={theme.custom.spacing.cardInner}>To Do</Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Users;
