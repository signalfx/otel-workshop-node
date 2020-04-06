'use strict';

const { MeterProvider }  = require('@opentelemetry/metrics');
const { ConsoleMetricExporter }  = require('@opentelemetry/metrics');

// Add your port and startServer to the Prometheus options
const options = {port: 9464, startServer: true};
const exporter = new ConsoleMetricExporter(options);

module.exports = (meterName) => {

  // Register the exporter
  return new MeterProvider({
    exporter,
    interval: 1000,
  }).getMeter(meterName);
};
