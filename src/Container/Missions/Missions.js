import React, { PureComponent } from "react";
import axios from "../../space-axios";
import Mission from "../../Component/Mission/Mission";
import classes from "./Missions.module.css";
import LeftBar from "../../Component/LeftBar/LeftBar";
import TableColumn from "../../Component/LeftBar/TableColumn/TableColumn";
import Header from "../../Component/Header/Header";
import Loader from "../../Component/Spinner/Spinner";
class Missions extends PureComponent {
  state = {
    missions: [],
    years: [
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
    ],
    year: "",
    lanchFilterValue: "",
    landFilterValue: "",

    appLiedLanchFilterColor: {
      true: "#badeba",
      false: "#badeba",
    },
    appliedLandFilterColor: {
      true: "#badeba",
      false: "#badeba",
    },
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
    axios
      .get("/")
      .then((response, err) => {
        this.setState({ loading: false });
        const data = response.data;

        this.setState({
          missions: data,
          temproryState: data,
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  yearClickHandler = (e, year) => {
    if (year !== undefined && year !== this.state.year) {
      let url = "";
      const lanchFilterValue = this.state.lanchFilterValue;
      const landFilterValue = this.state.landFilterValue;
      if (lanchFilterValue === "" && landFilterValue === "") {
        url = `&launch_year=${year}`;
      }
      if (lanchFilterValue === "" && landFilterValue !== "") {
        url = `&launch_year=${year}&land_success=${landFilterValue}`;
      }
      if (lanchFilterValue !== "" && landFilterValue === "") {
        url = `&launch_year=${year}}&launch_success=${lanchFilterValue}`;
      }
      if (lanchFilterValue !== "" && landFilterValue !== "") {
        url = `&launch_year=${year}&launch_success=${lanchFilterValue}&land_success=${landFilterValue}`;
      }

      this.setState({ loading: true });
      axios.get(url).then((response, err) => {
        this.setState({ loading: false });
        this.setState({
          missions: response.data,
          year: year,
        });
      });
    }
  };
  isLaunchSuccessfulHandler = (e, status) => {
    this.setState({ loading: true });

    // check year or isLanding true and create URL accordingly
    let url = "";
    const year = this.state.year;
    const landFilterValue = this.state.landFilterValue;
    if (year === "" && landFilterValue === "") {
      url = `&launch_success=${status}`;
    } else if (year === "" && landFilterValue !== "") {
      url = `&launch_success=${status}&land_success=${landFilterValue}`;
    } else if (year !== "" && landFilterValue === "") {
      url = `&launch_success=${status}&launch_year=${year}`;
    } else if (year !== "" && landFilterValue !== "") {
      url = `&launch_success=${status}&land_success=${landFilterValue}&launch_year=${year}`;
    }

    axios.get(url).then((response, err) => {
      this.setState({ loading: false });
      this.setState({
        missions: response.data,

        lanchFilterValue: status,
        appLiedLanchFilterColor: {
          true: "#badeba",
          false: "#badeba",
          [status]: "green",
        },
      });
    });
  };
  isLandSuccessfulHandler = (e, status) => {
    this.setState({ loading: true });
    //* Custom URL creation start
    let url = "";
    const year = this.state.year;
    const lanchFilterValue = this.state.lanchFilterValue;
    if (year === "" && lanchFilterValue === "") {
      url = `&land_success=${status}`;
    }
    if (year === "" && lanchFilterValue !== "") {
      url = `&land_success=${status}&launch_success=${lanchFilterValue}`;
    }
    if (year !== "" && lanchFilterValue === "") {
      url = `&land_success=${status}&launch_year=${year}`;
    }
    if (year !== "" && lanchFilterValue !== "") {
      url = `&land_success=${status}&launch_success=${lanchFilterValue}&launch_year=${year}`;
    }

    //* Custom URL creation end

    axios.get(url).then((response, err) => {
      this.setState({ loading: false });
      this.setState({
        missions: response.data,
        landFilterValue: status,
        appliedLandFilterColor: {
          true: "#badeba",
          false: "#badeba",
          [status]: "green",
        },
      });
    });
  };

  render() {
    const data = this.state.missions;
    let missionsData = data.map((el) => (
      <Mission
        key={el.mission_name}
        mission_id={el.mission_id}
        launch_year={el.launch_year}
        launch_success={el.launch_success}
        land_success={el.rocket.first_stage.cores[0].land_success}
        mission_patch={el.links.mission_patch}
      />
    ));
    const years = [...this.state.years];
    const rows = years.map((el, i, arr) => {
      let res = null;
      if (i % 2 === 0) {
        res = (
          <tr key={arr[i]} onClick={this.yearClickHandler}>
            <TableColumn
              yearClick={(event) => this.yearClickHandler(event, arr[i])}
              color={this.state.year === arr[i] ? "green" : "#badeba"}
              year={arr[i]}
            />

            <TableColumn
              color={this.state.year === arr[i + 1] ? "green" : "#badeba"}
              yearClick={(event) => this.yearClickHandler(event, arr[i + 1])}
              year={arr[i + 1]}
            />
          </tr>
        );
      }
      return res;
    });

    const table = (
      <table cellSpacing="22" cellPadding="10">
        <thead>
          <tr>
            <th colSpan="2" style={{ textDecoration: "underline" }}>
              Launch Year
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
          <tr>
            <td colSpan="2" style={{ background: "white" }}>
              <b style={{ textDecoration: "underline" }}>Launch Successful</b>
            </td>
          </tr>
          <tr>
            <td
              style={{ background: this.state.appLiedLanchFilterColor.true }}
              onClick={(event) => this.isLaunchSuccessfulHandler(event, "true")}
            >
              True
            </td>
            <td
              style={{ background: this.state.appLiedLanchFilterColor.false }}
              onClick={(event) =>
                this.isLaunchSuccessfulHandler(event, "false")
              }
            >
              False
            </td>
          </tr>

          <tr>
            <td colSpan="2" style={{ background: "white" }}>
              <b style={{ textDecoration: "underline" }}>Land Successful</b>
            </td>
          </tr>
          <tr>
            <td
              style={{ background: this.state.appliedLandFilterColor.true }}
              onClick={(event) => this.isLandSuccessfulHandler(event, "true")}
            >
              True
            </td>
            <td
              style={{ background: this.state.appliedLandFilterColor.false }}
              onClick={(event) => this.isLandSuccessfulHandler(event, "false")}
            >
              False
            </td>
          </tr>
        </tbody>
      </table>
    );
    if (missionsData.length === 0) {
      missionsData = (
        <h1 style={{ marginTop: "30%", marginLeft: "13%" }}>
          There is no Data available for aplied filter
        </h1>
      );
    }
    return (
      <React.Fragment>
        <Header />
        <LeftBar>{table}</LeftBar>
        <div className={classes.Missions}>
          {this.state.loading ? <Loader /> : missionsData}:
        </div>
        <footer>Developed by: Santosh</footer>
      </React.Fragment>
    );
  }
}

export default Missions;
