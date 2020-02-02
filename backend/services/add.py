from common.db import Db
import json

def AddService(args):

    request = dict(args)
    response = {}
    
    # parameter checks
    if not 'user_id' in request:
        return Failure("user_id")

    if not 'title' in request:
        return Failure("title")

    if not 'description' in request:
        return Failure("description")

    if not 'rent' in request:
        return Failure("rent")

    if not 'address' in request:
        return Failure("address")

    if not 'images' in request:
        return Failure("images")

    # database query
    sql = '''INSERT INTO house (`user_id`,`title`,`description`,`rent`,`address`,`images`) VALUES (%s, %s, %s, %s, %s, %s);'''
    val = (request['user_id'], request['title'], request['description'], request['rent'], request['address'], json.dumps(request['images']))

    house_id = Db().insert(sql, val)
    if isinstance(house_id, int):
        response['status']="Success"
        return response
    else:
        response['status'] = "Failure"
        response['error'] = house_id
        return response

# failure response
def Failure(parameter):
    response = {}
    response['status'] = "Failure"
    response['error'] = "Please enter "+parameter
    return response