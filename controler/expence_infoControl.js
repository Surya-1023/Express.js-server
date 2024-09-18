import con from "../db.js";

export const getEinfo = async(req, res) =>{
    let getEinfo = "select * from expence_info";
    con.query(getEinfo,(err,exinfoData)=>{
        if(err){throw err }
        res.send(exinfoData);
    })
};

export const deleteEinfo = async (req, res) => {
    try {
      const id = req.params.id;
  
      let conall = "DELETE FROM expence_info WHERE id = " + id;
  
      con.query(conall, (err, exinfoData) => {
        if (err) {
          throw err;
        }
        res.send(exinfoData);
      });
    } catch (error) {
      res.status(500).json({ error: error.body });
    }
  };

export const getOneEinfo= async (req, res) => {
  try {
    const id = req.params.id;
    let conall = "select * from expence_info where cus_id= " + id;
    con.query(conall, (err, exinfoData) => {
      if (err) {
        throw err;
      }
      res.send(exinfoData);
    });
  } catch (error) {
    res.status(500).json({ error: error + "getone" });
  }
};

export const createEinfo = async (req, res) => {
    try {
      const {
        cus_id,
        type
        
        
      } = req.body;
      console.log(cus_id);
      con.query(
        "INSERT INTO  `expences` (`cus_id`, `type`) VALUES  VALUES  (?,?)",
        [
           cus_id,
           type
          
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