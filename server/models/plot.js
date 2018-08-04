var PlotSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    construction_start_date: Date,
    note: String,
    sold:Boolean,
    owner_name:String,
    owner_phone:String,
  });

  module.exports = mongoose.model('Plot', PlotSchema);