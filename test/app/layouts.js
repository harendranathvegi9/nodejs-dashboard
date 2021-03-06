"use strict";

module.exports = [
  [
    {
      "views": [
        {
          "name": "cpu",
          "limit": 30
        },
        {
          "name": "eventLoop",
          "limit": 30
        },
        {
          "name": "memory",
          "position": {
            "size": 15
          }
        }
      ]
    },
    {
      "position": {
        "grow": 3
      },
      "views": [
        {
          "name": "stdout"
        },
        {
          "name": "stderr",
          "position": {
            "size": 15
          }
        }
      ]
    }
  ]
];
