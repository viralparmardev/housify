from common.db import Db
import json

def HomeService(args):
    
    response = {}
    house_object = {}
    houses_array = []

    # database query
    sql = '''SELECT house_id, title, description, rent, images FROM house ORDER BY house_id DESC'''
    rows = Db().select(sql)
    if rows:
        for row in rows:
            house_object['house_id']=row['house_id']
            house_object['title']=row['title']
            house_object['description']=row['description']
            house_object['rent']=row['rent']
            house_object['images']=json.loads(row['images'])

            # storing house data in array of objects
            houses_array.append(house_object)
            house_object = {}

        response['status']="Success"
        response['data']=houses_array
        return response
    else:
        response['status'] = "Failure"
        response['error'] = "Could not find data of houses"
        return response
