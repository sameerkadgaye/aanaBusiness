import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Tooltip } from "primereact/tooltip";
import axios from "axios";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";

const SettlementList = () => {
  const [customers, setCustomers] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const dt = useRef(null);

  const exportColumns = [
    { title: "Id", dataKey: "id" },
    { title: "Month", dataKey: "month" },
    { title: "year", dataKey: "year" },
    // { title: "Representative", dataKey: "representative.name" },
  ];

  // useEffect(() => {
  //   // Mock data or replace with an API call
  //   const fetchData = async () => {
  //     try {
  //       // Uncomment and replace the URL with your API endpoint if needed
  //       // const response = await axios.get("/api/customers");
  //       // setCustomers(response.data);

  //       const data = [
  //         {
  //           id: 1000,
  //           name: "James Butt",
  //           country: { name: "Algeria", code: "dz" },
  //           company: "Benton, John B Jr",
  //           date: "2015-09-13",
  //           status: "unqualified",
  //           verified: true,
  //           activity: 17,
  //           representative: { name: "Ioni Bowcher", image: "ionibowcher.png" },
  //           balance: 70663,
  //         },
  //         // Add more data as required
  //       ];

  //       setCustomers(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8084/paymentlist")
      .then((res) => setCustomers(res.data))
      .catch((err) => console.error("Error fetching payment list:", err));
  }, []);

  const exportCSV = (selectionOnly) => {
    if (dt.current) {
      dt.current.exportCSV({ selectionOnly });
    }
  };

  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default();
        const data = customers.map((customer) => ({
          id: customer.id,
          month: customer.month,
          year: customer.year,
          // name: customer.name,
          // country: customer.country.name,
          // company: customer.company,
          // representative: customer.representative.name,
        }));

        doc.autoTable(exportColumns, data);
        doc.save("customers.pdf");
      });
    });
  };

  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const data = customers.map((customer) => ({
        // Name: customer.name,
        // Country: customer.country.name,
        // Company: customer.company,
        // Representative: customer.representative.name,
        Id: customer.id,
        Month: customer.month,
        Year: customer.year,
      }));

      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, "customers");
    });
  };

  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        const EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        const EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], { type: EXCEL_TYPE });

        module.default.saveAs(
          data,
          `${fileName}_export_${new Date().getTime()}${EXCEL_EXTENSION}`
        );
      }
    });
  };

  return (
    <div className="card p-2 mt-5 bg">
      <div className="mt-3 mb-5">
        <h4>Payment Settlement list</h4>
        <hr />
      </div>
      <Tooltip target=".export-buttons button" />

      <div
        className="d-flex align-items-center justify-content-between mb-3"
        style={{ gap: "1rem" }}
      >
        <div>
          <span className="p-input-icon-left">
            <InputText
              type="search"
              placeholder="Search..."
              onInput={(e) => setGlobalFilter(e.target.value)}
              className="mb-2"
            />
          </span>
        </div>

        <div className="export-buttons d-flex rounded  gap-2">
          <div>
            <Button
              type="button"
              icon="pi pi-file"
              rounded
              onClick={() => exportCSV(false)}
              data-pr-tooltip="Export as CSV"
            />
          </div>
          <div>
            <Button
              type="button"
              icon="pi pi-file-excel"
              severity="success"
              rounded
              onClick={exportExcel}
              data-pr-tooltip="Export as Excel"
            />
          </div>
          <div>
            <Button
              type="button"
              icon="pi pi-file-pdf"
              severity="warning"
              rounded
              onClick={exportPdf}
              data-pr-tooltip="Export as PDF"
            />
          </div>
        </div>
      </div>

      <DataTable
        ref={dt}
        value={customers}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        stripedRows
        //new data
        globalFilter={globalFilter}

        //new data
      >
        {/* <Column field="name" header="Name" style={{ width: "25%" }}></Column> */}
        <Column
          field="id"
          header="Id"
          filter
          filterPlaceholder="Search by Id"
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="month"
          header="Month"
          filter
          filterPlaceholder="Search by Month"
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="year"
          header="Year"
          filter
          filterPlaceholder="Search by Year"
          style={{ width: "25%" }}
        ></Column>

        <Column
          field="action"
          header="Action"
          style={{ width: "25%" }}
          body={(rowData) => (
            <Link
              to="/home/pendingPaid"
              variant="info"
              className="btn btn-primary"
            >
              View
            </Link>
          )}
        ></Column>
      </DataTable>
    </div>
  );
};

export default SettlementList;