import React from "react";
import { Avatar, Grid, Paper } from "@material-ui/core";
import Card from "./Card";

function GridList({ list, circle }) {
  return (
    <Grid style={{ marginTop: "-7%" }} item xs={12}>
      <Grid container justify="center" spacing={8}>
        {list.map((ele) => (
          <Grid data-scroll data-scroll-speed="2" key={ele.id} item>
            {!circle ? (
              <Card value={ele} />
            ) : (
              <div>
                <Card value={ele}>
                  <Avatar style={{ width: "150px", height: "150px" }} />
                </Card>
              </div>
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default GridList;
