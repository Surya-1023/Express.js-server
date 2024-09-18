import con from "../db.js";

export const getBill = async(req, res) =>{
    let getBill = "select * from bill";
    con.query(getBill,(err,billData)=>{
        if(err){throw err }
        res.send(billData);
    })
};

export const deleteBill = async (req, res) => {
    try {
      const id = req.params.id;
  
      let conall = "DELETE FROM bill WHERE sno = " + id;
  
      con.query(conall, (err, billData) => {
        if (err) {
          throw err;
        }
        res.send(billData);
      });
    } catch (error) {
      res.status(500).json({ error: error.body });
    }
  };

export const getOneBill = async (req, res) => {
  try {
    const id = req.params.id;
    let conall = "select * from bill where sno = " + id;
    con.query(conall, (err, billData) => {
      if (err) {
        throw err;
      }
      res.send(billData);
    });
  } catch (error) {
    res.status(500).json({ error: error + "getone" });
  }
};

export const createBill = async (req, res) => {
    try {
      const {
           sno,
           booking_id,
           charge,
           amt_pay,
           pay_type,
           description,
           pay_to
        
        
      } = req.body;
      console.log(sno);
      con.query(
        "INSERT INTO `bill` (`sno`, `booking_id`, `charge`, `amt_pay`, `pay_type`, `description`, `pay_to`) VALUES  (?,?,?,?,?,?,?)",
        [
           sno,
           booking_id,
           charge,
           amt_pay,
           pay_type,
           description,
           pay_to
          
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