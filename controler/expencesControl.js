import con from "../db.js";

export const getExp = async(req, res) =>{
    let getExp = "select * from expences";
    con.query(getExp,(err,expData)=>{
        if(err){throw err }
        res.send(expData);
    })
};

export const deleteExp = async (req, res) => {
    try {
      const id = req.params.id;
  
      let conall = "DELETE FROM expences WHERE id = " + id;
  
      con.query(conall, (err, expData) => {
        if (err) {
          throw err;
        }
        res.send(expData);
      });
    } catch (error) {
      res.status(500).json({ error: error.body });
    }
  };

export const getOneExp = async (req, res) => {
  try {
    const id = req.params.id;
    let conall = "select * from expences where ex_sno = " + id;
    con.query(conall, (err, expData) => {
      if (err) {
        throw err;
      }
      res.send(expData);
    });
  } catch (error) {
    res.status(500).json({ error: error + "getone" });
  }
};

export const createExp = async (req, res) => {
    try {
      const {
        ex_sno,
        expence_type,
        date,
        description,
        referance
        
        
      } = req.body;
      console.log(ex_sno);
      con.query(
        "INSERT INTO `expence_info` (`ex_sno`, `expence_type`, `date`, `description`, `referance`) VALUES  (?,?,?,?,?)",
        [
           ex_sno,
           expence_type,
           date,
           description,
           referance
          
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