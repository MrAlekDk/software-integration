import express from 'express';
import { readTextFile, parseCsvFile, parseJsonFile, parseXmlFile, parseYamlFile } from '../../02._data_formats/homework/parser.js';

const app = express();

app.get('/csv', async (req, res) => {
  res.json({data: await parseCsvFile('../data/me.csv')});
});

app.get('/json', (req, res) => {
    res.json({data: parseJsonFile('../data/me.json')});
});

app.get('/xml', (req, res) => {
    res.json({data: parseXmlFile('../data/me.xml')});
});

app.get('/yaml', (req, res) => {
    res.json({data: parseYamlFile('../data/me.yaml')});
});

//the textfile is not parsed to a json format, but just read as a string and returned as a json object
app.get('/text', (req, res) => {
    res.json({data: readTextFile('../data/me.txt')});
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});