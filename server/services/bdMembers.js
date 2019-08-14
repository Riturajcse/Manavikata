'use strict';

var self;
var bdMemberModel = require('../models/bdMemberModel');
var _ = require('lodash');
var Mongoose = require('mongoose');

module.exports = function() {
    return new class bdMemberApiService {
        constructor() {
            self = this;
        }
// Get list of all document fields
        async index(req, res) {
            try {
              let fields = await bdMemberModel.find().exec();
              return res.status(200).send({ status: true, data: fields});
            }
            catch (err) {
              return self.handleError(res, err);
            }
        }

// Get single document
        // async getbdMemberByType(req, res) {
        //     try {
        //     if (!req.params.type) {
        //         return res.status(200).send({ status: false,
        //             errors: [{ message: 'Type is missing in params' }]});
        //         }
        //     let fields = await bdMemberModel.findOne({type: req.params.type}).exec();
        //     if (_.isEmpty(fields))
        //         return res.status(200).send({ status: false,
        //             errors: [{ message: 'No bdMember data available for type: ' +  req.params.type}]});
        //     return res.status(200).send({ status: true, data: fields});
        //     }
        //     catch (err) {
        //     return self.handleError(res, err);
        //     }
        // }

// Creates or updates bdMember in the DB
        async create(req, res) {
            try {
              if (!req.body.name || !req.body.contactNumber || !req.body.email ||
                !req.body.address || !req.body.bloodGroup) {
                  return res.status(200).send({ status: false,
                    errors: [{ message: 'Member params are missing' }]});
              }
              let reqBody = {
                contactNumber: req.body.contactNumber,
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                bloodGroup: req.body.bloodGroup
            };
            let bd = await bdMemberModel.create(reqBody);
                return res.status(200).send({ status: true, data:bd});
            }
            catch (err) {
              console.log("error in creating/updating bdMember:", err);
              return self.handleError(res, err);
            }
        }

        handleError(res, err) {
            console.log(err);
            return res.status(200).send({ status: false, Error: err});
        }
    }
}
