'use strict';

var self;
var memberModel = require('../models/memberModel');
var _ = require('lodash');
var Mongoose = require('mongoose');

module.exports = function() {
    return new class memberApiService {
        constructor() {
            self = this;
        }
// Get list of all document fields
        async index(req, res) {
            try {
              let fields = await memberModel.find().exec();
              return res.status(200).send({ status: true, data: fields});
            }
            catch (err) {
              return self.handleError(res, err);
            }
        }

// Get single document
        // async getmemberByType(req, res) {
        //     try {
        //     if (!req.params.type) {
        //         return res.status(200).send({ status: false,
        //             errors: [{ message: 'Type is missing in params' }]});
        //         }
        //     let fields = await memberModel.findOne({type: req.params.type}).exec();
        //     if (_.isEmpty(fields))
        //         return res.status(200).send({ status: false,
        //             errors: [{ message: 'No member data available for type: ' +  req.params.type}]});
        //     return res.status(200).send({ status: true, data: fields});
        //     }
        //     catch (err) {
        //     return self.handleError(res, err);
        //     }
        // }

// Creates or updates member in the DB
        async create(req, res) {
            try {
              if (!req.body.name || !req.body.fatherName || !req.body.nationality ||
                !req.body.dob || !req.body.sex || !req.body.occupation ||
                !req.body.academicQualification || !req.body.contactNumber || !req.body.address ||
                !req.body.email) {
                  return res.status(200).send({ status: false,
                    errors: [{ message: 'Member params are missing' }]});
              }
              let reqBody = {
                contactNumber: req.body.contactNumber,
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                fatherName: req.body.fatherName,
                nationality: req.body.nationality,
                dob: req.body.dob,
                sex: req.body.sex,
                occupation: req.body.occupation,
                academicQualification: req.body.academicQualification
            };
            let bd = await memberModel.create(reqBody);
                return res.status(200).send({ status: true, data:bd});
            }
            catch (err) {
              console.log("error in creating/updating member:", err);
              return self.handleError(res, err);
            }
        }

        handleError(res, err) {
            console.log(err);
            return res.status(200).send({ status: false, Error: err});
        }
    }
}
