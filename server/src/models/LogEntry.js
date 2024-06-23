const mongoose =require ('mongoose');
const  Schema  = mongoose.Schema;

 const requiredNumber={
    
    type:Number,
    required:true
  };

 
 

const logEntrySchema = new Schema({
  title: {
    type:String,
    required:true,
  }, // String is shorthand for {type: String}
  Descript: String,
  //body: String,
  comments: String,
  image:String,
  rating:{
    type:Number,
    min:0,
    max:10,
    default: 0
  },

  latitude:{
    ...requiredNumber,
    min:-90,
    max:90,
  },
  longitude:{
    ...requiredNumber,
    min:-180,
    max:180,
  //created_at:defaultRequiredDate,
  
//updated_at:defaultRequiredDate
  },
  visitDate:{
    required:true,
    type:Date,

  },
    },

    {
        timestamps:true,
     }
);
const LogEntry = mongoose.model('LogEntry',logEntrySchema);

module.exports=LogEntry;