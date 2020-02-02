from common.db import Db
import json

def HouseService(args):

    request = dict(args)
    response = {}

    # parameter checks
    if not 'house_id' in request:
        return Failure("house_id")

    # database query
    sql = '''SELECT * from house INNER JOIN user on house.user_id = user.user_id WHERE house_id = %s''' %(request['house_id'])
    rows = Db().select(sql)
    if rows:
        for row in rows:
            response['house_id']=row['house_id']
            response['title']=row['title']
            response['description']=row['description']
            response['rent']=row['rent']
            response['address']=row['address']
            response['images']=json.loads(row['images'])
            response['name']=row['name']
            response['email']=row['email']
            response['mobile']=row['mobile']

            response['status']="Success"
            return response

    else:
        return Failure("correct house_id")

# failure response
def Failure(parameter):
    response = {}
    response['status'] = "Failure"
    response['error'] = "Please enter "+parameter
    return response