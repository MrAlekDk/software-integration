from fastapi import FastAPI
import my_parser

app = FastAPI()

@app.get("/csv")
def csv_to_json():
    csv_data = my_parser.parse_csv_file('../data/me.csv')
    return csv_data

@app.get("/json")
def json_to_csv():
    json_data = my_parser.parse_json_file('../data/me.json')
    return json_data

@app.get("/xml")
def xml_to_json():
    xml_data = my_parser.parse_xml_file('../data/me.xml')
    return xml_data

@app.get("/yaml")
def yaml_to_json():
    yaml_data = my_parser.parse_yaml_file('../data/me.yaml')
    return yaml_data
