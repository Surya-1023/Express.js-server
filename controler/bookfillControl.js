import con from "../db.js";

export const getBfill = async(req, res) =>{
    let getBfill = "select * from bookfill";
    con.query(getBfill,(err,bfillData)=>{
        if(err){throw err }
        res.send(bfillData);
    })
};

export const deleteBfill = async (req, res) => {
    try {
      const id = req.params.id;
  
      let conall = "DELETE FROM bookfill WHERE booking_id = " + id;
  
      con.query(conall, (err, bfillData) => {
        if (err) {
          throw err;
        }
        res.send(bfillData);
      });
    } catch (error) {
      res.status(500).json({ error: error.body });
    }
  };

export const getOneBfill = async (req, res) => {
  try {
    const id = req.params.id;
    let conall = "select * from bookfill where booking_id= " + id;
    con.query(conall, (err, bfillData) => {
      if (err) {
        throw err;
      }
      res.send(bfillData);
    });
  } catch (error) {
    res.status(500).json({ error: error + "getone" });
  }
};

export const createBfill = async (req, res) => {
    try {
      const {
            booking_id,
            room_no,
            date
        
      } = req.body;
      console.log(booking_id);
      con.query(
        "INSERT INTO `bookfill` (`booking_id`, `room_no`, `date`) VALUES  (?,?,?)",
        [
            booking_id,
            room_no,
            date  
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