const mongoose = require("mongoose");

const endpointSchema = new mongoose.Schema(
  {
    endpoint: { type: String },
    method: { type: String },
    input_query_strings: { type: Array },
    input_headers: { type: Array },
    concurrent_calls: { type: String },
    max_rate: { type: String },
    client_max_rate: { type: String },

    url_pattern: { type: String },
    method: { type: String },
    max_rate: { type: String },
    capacity: { type: String },
    servicesId: { type: String, ref: "Services" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EndpointServices", endpointSchema);
