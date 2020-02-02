from common.db import Db

def RegisterService(args):

    request = dict(args)
    response = {}

    # parameter checks
    if not 'email' in request:
        return Failure("email")

    if not 'password' in request:
        return Failure("passord")

    if not 'name' in request:
        return Failure("name")

    if not 'mobile' in request:
        return Failure("mobile")

    # database query
    sql = '''INSERT INTO user (`name`,`email`,`mobile`,`password`) VALUES (%s, %s, %s, %s);'''
    val = (request['name'], request['email'], request['mobile'], request['password'])

    user_id = Db().insert(sql, val)
    if isinstance(user_id, int):
        response['status']="Success"
        return response
    else:
        response['status'] = "Failure"
        response['error'] = user_id
        return response

# failure response
def Failure(parameter):
    response = {}
    response['status'] = "Failure"
    response['error'] = "Please enter "+parameter
    return response