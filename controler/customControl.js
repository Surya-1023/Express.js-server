import con from "../db.js";

export const getCust = async(req, res) =>{
    let getCust = "select * from customer";
    con.query(getCust,(err,custData)=>{
        if(err){throw err }
        res.send(custData);
    })
};

export const deleteCust = async (req, res) => {
    try {
      const id = req.params.id;
  
      let conall = "DELETE FROM customer WHERE cus_id = " + id;
  
      con.query(conall, (err, custData) => {
        if (err) {
          throw err;
        }
        res.send(custData);
      });
    } catch (error) {
      res.status(500).json({ error: error.body });
    }
  };

export const getOneCust = async (req, res) => {
  try {
    const id = req.params.id;
    let conall = "select * from customer where cus_id= " + id;
    con.query(conall, (err, custData) => {
      if (err) {
        throw err;
      }
      res.send(custData);
    });
  } catch (error) {
    res.status(500).json({ error: error + "getone" });
  }
};

export const createCust = async (req, res) => {
    try {
      const {
        cus_id,
        cus_name,
        cus_address,
        cus_place,
        cus_number,
        cus_aadhar,
        cus_email
        
        
      } = req.body;
      console.log(cus_id);
      con.query(
        "INSERT INTO `customer` (`cus_id`, `cus_name`, `cus_adderess`, `cus_place`, `cus_number`, `cus_aadhar`, `cus_email`)  VALUES (?,?,?,?,?,?,?)",
        [
            cus_id,
            cus_name,
            cus_address,
            cus_place,
            cus_number,
            cus_aadhar,
            cus_email
          
        ],
        (err, result) => {
          if (err) throw err;
          res.json({ message: "Data added successfully", id: result.insertId });
        }
      );
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };