"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable import/no-anonymous-default-export */
var _default = {
  weather: {
    base: 'http://api.openweathermap.org/data/2.5',
    forecast: function forecast(query) {
      return "/forecast/climate?q=".concat(query, "&appid=").concat(process.env.REACT_APP_API_KEY, "&units=metric");
    },
    current: function current(query) {
      return "/weather?q=".concat(query, "&appid=").concat(process.env.REACT_APP_API_KEY, "&units=metric");
    }
  }
};
exports["default"] = _default;