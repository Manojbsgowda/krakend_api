const express = require("express");
const EndpointServices = require("../models/EndpointServices");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const newEndpointService = new EndpointServices({
      endpoint: req.body.krakend_endpoint,
      method: req.body.http_method,
      input_query_strings: req.body.parameters,
      input_headers: req.body.headers_passing_to_backend,
      concurrent_calls: req.body.concurrent_calls,
      max_rate: req.body.rate_limit,
      client_max_rate: req.body.user_quota,

      url_pattern: req.body.backend_endpoint,
      method: req.body.endpoint_http_method,
      max_rate: req.body.endpoint_rate_limit,
      capacity: req.body.Capacity_burstsize,
      servicesId: req.body.servicesId,
    });
    const saved = await newEndpointService.save();
    res.status(201).json({ saved, message: "endpoint data saved" });
  } catch (error) {
    res.status(500).json({ error, message: "check with the code for errors" });
  }
});

router.get("/", async (req, res) => {
  try {
    let endpointList = [];
    const data = await EndpointServices.find({
      servicesId: "6254029f2d41a43a4df4182f",
    });
    // const originalFormat = {
    //   endpoint:,
    //   method:,
    //   extra_config:{
    //     qos/ratelimit/router:{
    //       max_rate:,
    //       client_max_rate:,
    //       strategy: ,
    //     }
    //   },

    //   backend:[
    //     {
    //       url_pattern:,
    //       method:,
    //       extra_config:{
    //         qos/ratelimit/proxy:,
    //         max_rate:,
    //         capacity:,
    //       }
    //     },
    //   ]

    // }
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error, message: "not getting any value" });
  }
});

module.exports = router;
