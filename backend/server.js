const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors

const app = express();
const port = 3000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json({ limit: "200mb" }));

// MySQL Connection Pool
const db = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "1009mKoss",
  database: "ccesvn",
  insecureAuth: true,
  authSwitchHandler: function ({ pluginName, pluginData }, cb) {
    if (pluginName === "mysql_native_password") {
      const password = "1009mKoss";
      const securePassword = require("secure-password");
      const pwd = securePassword();
      const hashedPassword = pwd.hashSync(Buffer.from(password));
      cb(null, hashedPassword);
    } else {
      return cb(new Error(`Unsupported authentication plugin: ${pluginName}`));
    }
  },
});

//API ADD FATURAÇÃO
app.post("/api/faturacao/add", (req, res) => {
  const { empresa, numeroFatura, data, categoria, valorTotal, file } = req.body;

  const mysqlQuery = `
    INSERT INTO faturacao (empresa, numeroFatura, data, categoria, valorTotal, file)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const mysqlData = [empresa, numeroFatura, data, categoria, valorTotal, file];
  db.query(mysqlQuery, mysqlData, (err, results) => {
    if (err) {
      console.error("Error adding transport data to MySQL:", err);
      res.status(500).json({ error: "Failed to add transport data to MySQL" });
    } else {
      res.status(200).json({ message: "Transport data added successfully!" });
    }
  });
});

//API GET FATURAÇÃO
app.get("/api/faturacao/get", (req, res) => {
  const mysqlQuery = `
      SELECT * FROM faturacao
    `;

  db.query(mysqlQuery, (err, results) => {
    if (err) {
      console.error(
        "Error fetching Faturacao transportes data from MySQL:",
        err
      );
      res.status(500).json({
        error: "Failed to fetch Faturacao transportes data from MySQL",
      });
    } else {
      res.status(200).json(results);
    }
  });
});

//API DELETE FATURAÇÃO
app.delete("/api/faturacao/delete/:numeroFatura/:id", (req, res) => {
  const numeroFatura = req.params.numeroFatura;
  const id = req.params.id;

  const mysqlQuery = `
    DELETE FROM faturacao WHERE
    numeroFatura = ? AND id = ?
  `;

  db.query(mysqlQuery, [numeroFatura, id], (err, results) => {
    if (err) {
      console.error("Error removing data from MySQL:", err);
      res.status(500).json({ error: "Failed to remove data from MySQL" });
    } else {
      console.log("Data removed from MySQL:", results);
      res.status(200).json({ message: "Data removed successfully!" });
    }
  });
});

// MONEY SPEND -- Need Change to apply all carts moneyof faturamento page
app.get("/api/faturacao/get/:mes/:ano/:categoria", (req, res) => {
  const mes = req.params.mes;
  const ano = req.params.ano;
  const categoria = req.params.categoria;

  const mysqlQuery = `
    SELECT CAST(valorTotal AS DECIMAL(10, 2)) AS valorTotal FROM faturacao
    WHERE MONTH(data) = ? AND YEAR(data) = ? AND categoria = ?
  `;

  db.query(mysqlQuery, [mes, ano, categoria], (err, results) => {
    if (err) {
      console.error(
        "Error fetching Faturacao transportes data from MySQL:",
        err
      );
      res.status(500).json({
        error: "Failed to fetch Faturacao transportes data from MySQL",
      });
    } else {
      const valoresTotais = results.map((result) => result.valorTotal);
      res.status(200).json(valoresTotais);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
