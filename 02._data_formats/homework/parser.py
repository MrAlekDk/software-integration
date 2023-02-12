# Reading text files
def read_text_file(file_path):
    with open(file_path, 'r') as file:
        return file.read()

# Parsing XML files
import xmltodict

def parse_xml_file(file_path):
    with open(file_path, 'r') as file:
        xml_content = file.read()
        return xmltodict.parse(xml_content)

# Parsing YAML files
import yaml

def parse_yaml_file(file_path):
    with open(file_path, 'r') as file:
        return yaml.safe_load(file)

# Parsing JSON files
import json

def parse_json_file(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

# Parsing CSV files
import pandas as pd

def parse_csv_file(file_path):
    return pd.read_csv(file_path, header=0).squeeze(0).to_dict()

#Data parsed to dictionary (except for txt)
json_data = parse_json_file('me.json')
xml_data = parse_xml_file('me.xml')
csv_data = parse_csv_file('me.csv')
txt_data = read_text_file('me.txt')
yaml_data = parse_yaml_file('me.yaml')