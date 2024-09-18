import con from "../db.js";

export const getRoom = async(req, res) =>{
    let getRoom = "select * from rooms";
    con.query(getRoom,(err,roomData)=>{
        if(err){throw err }
        res.send(roomData);
    })
};

export const deleteRoom = async (req, res) => {
    try {
      const id = req.params.id;
  
      let conall = "DELETE FROM rooms WHERE room_id = " + id;
  
      con.query(conall, (err, roomData) => {
        if (err) {
          throw err;
        }
        res.send(roomData);
      });
    } catch (error) {
      res.status(500).json({ error: error.body });
    }
  };

export const getOneRoom = async (req, res) => {
  try {
    const id = req.params.id;
    let conall = "select * from rooms where id= " + id;
    con.query(conall, (err, roomData) => {
      if (err) {
        throw err;
      }
      res.send(roomData);
    });
  } catch (error) {
    res.status(500).json({ error: error + "getone" });
  }
};

export const createRoom = async (req, res) => {
    try {
      const {
        room_id,
        room_name,
        room_charge,
        maximum_number
        
        
      } = req.body;
      console.log(room_id);
      con.query(
        "INSERT INTO `rooms` (`room_id`, `room_name`, `room_charge`, `maximum_number`)  VALUES  (?,?,?,?)",
        [
           room_id,
           room_name,
           room_charge,
           maximum_number
          
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