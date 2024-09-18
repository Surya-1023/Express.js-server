import con from "../db.js";

export const getBook = async(req, res) =>{
    let getBook = "select * from booking";
    con.query(getBook,(err,bookData)=>{
        if(err){throw err }
        res.send(bookData);
    })
};

export const deleteBook = async (req, res) => {
    try {
      const id = req.params.id;
  
      let conall = "DELETE FROM booking WHERE cus_id = " + id;
  
      con.query(conall, (err, bookData) => {
        if (err) {
          throw err;
        }
        res.send(bookData);
      });
    } catch (error) {
      res.status(500).json({ error: error.body });
    }
  };

export const getOneBook = async (req, res) => {
  try {
    const id = req.params.id;
    let conall = "select * from booking where booking_id = " + id;
    con.query(conall, (err, bookData) => {
      if (err) {
        throw err;
      }
      res.send(bookData);
    });
  } catch (error) {
    res.status(500).json({ error: error + "getone" });
  }
};

export const createBook = async (req, res) => {
    try {
      const {
           cus_id,
           booking_id,
           cus_address,
           from_date,
           to_date,
           room_no,
           amount,
           no_of_persons,
           charges,
           other_details
        
        
      } = req.body;
      console.log(cus_id);
      con.query(
        "INSERT INTO `booking` (`cus_id`, `booking_id`, `cus_adderess`, `from_date`, `to_date`, `room_no`, `amount`, `no_of_persons`, `charges`, `other_details`) VALUES  (?,?,?,?,?,?,?,?,?,?)",
        [
            cus_id,
            booking_id,
            cus_address,
            from_date,
            to_date,
            room_no,
            amount,
            no_of_persons,
            charges,
            other_details
          
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