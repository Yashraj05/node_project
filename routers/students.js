import express from 'express';

export const students  = express.Router();

students.use(express.json());

students.get('/:id')