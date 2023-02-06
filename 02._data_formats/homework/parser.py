import json
import xml
import csv

def parse_data(data_format, data):
    if data_format == 'json':
        return json.loads(data)
    elif data_format == 'xml':
        return xmltodict.parse(data)
    elif data_format == 'csv':
        return csv.DictReader(data.splitlines())
    elif data_format == 'yaml':
        return yaml.load(data)
    else:
        raise ValueError('Unknown data format')


print(parse_data('csv', '../me.csv'))