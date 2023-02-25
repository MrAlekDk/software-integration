// JavaScript script for reading and parsing files in Node.js using npm packages

// Import the built-in `fs` module for reading files
import fs from 'fs';

// Import the `fast-xml-parser` package for parsing XML files
import { XMLParser } from 'fast-xml-parser';

// Import the `yamljs` package for parsing YAML files
import yaml from 'yamljs';

// Import the `csvtojson` package for parsing CSV files
import csv from 'csvtojson';

// Reading text files
function readTextFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
  };
  
  // Parsing XML files
  function parseXmlFile(filePath) {
    const xml = fs.readFileSync(filePath, 'utf-8');
    let parser = new XMLParser()
    return parser.parse(xml).me
  };
  
  // Parsing YAML files
  function parseYamlFile(filePath) {
    const yamlData = readTextFile(filePath);
    return yaml.parse(yamlData);
  };
  
  // Parsing JSON files
  function parseJsonFile(filePath) {
    const json = readTextFile(filePath);
    return JSON.parse(json);
  };

  // Parsing CSV files
function parseCsvFile(filePath) {
    return csv().fromFile(filePath);
  };

export {readTextFile, parseXmlFile, parseYamlFile, parseJsonFile, parseCsvFile}