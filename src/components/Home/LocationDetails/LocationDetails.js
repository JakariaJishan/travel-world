import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Button, Stack, TextField } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { locationData } from "../../../data";
import './LocationDetails.css';

const LocationDetails = () => {
  let locationid = useParams();
  const detailsData = locationData[locationid.id - 1];

  sessionStorage.setItem("id", locationid.id);

  const [value1, setValue1] = useState(new Date());
  const [value2, setValue2] = useState(new Date());

  const handleChange1 = (newValue) => {
    setValue1(newValue);
  };
  const handleChange2 = (newValue) => {
    setValue2(newValue);
  };
  return (
    <div>
      <Container className="mt-5">
        <Row >
          <Col>
            <div>
              <h1
                style={{
                  fontSize: "75px",
                  fontWeight: "bold",
                }}
              >
                {detailsData?.name}
              </h1>
              <p
                style={{
                  fontSize: "25px",
                  color: "rgb(187 187 187)",
                }}
              >
                {detailsData?.desc}
              </p>
            </div>
          </Col>
          <Col style={{background:'#eee'}}>
            <TextField
              className="my-3"
              id="outlined-basic"
              label="Origin"
              variant="outlined"
              style={{
                background: "#fff",
              }}
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Destination"
              variant="outlined"
              style={{
                background: "#fff",
              }}
              fullWidth
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <Row className="mx-auto  my-3">
                  <Col className="">
                    <DesktopDatePicker
                      style={{
                        background: "#fff",
                      }}
                      label="From"
                      inputFormat="MM/dd/yyyy"
                      value={value1}
                      onChange={handleChange1}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Col>
                  <Col className="">
                    <DesktopDatePicker
                      label="To"
                      inputFormat="MM/dd/yyyy"
                      value={value2}
                      onChange={handleChange2}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Col>
                </Row>
              </Stack>
            </LocalizationProvider>
            <div>
              <Link to={`/booking/${detailsData.id}`} style={{textDecoration:'none'}}>
                <Button
                  variant="contained"
                  style={{ background: "#35363A", }}
                  fullWidth
                  size="large"
                >
                  book
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LocationDetails;
