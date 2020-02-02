from common.db import Db

def LoginService(args):

    request = dict(args)
    response = {}

    # parameter checks
    if not 'email' in request:
        return Failure("email")

    if not 'password' in request:
        return Failure("password")

    # database query
    sql = '''SELECT * FROM user WHERE email="%s" AND password="%s"'''%(request['email'],request['password']) 

    rows = Db().select(sql)
    if rows:
        for row in rows:
            response['user_id']=row['user_id']
            response['name']=row['name']
            response['email']=row['email']
            response['mobile']=row['mobile']
            response['password']=row['password']

        response['status']="Success"
        return response
    else:
        return Failure("correct email and password")

# failure response
def Failure(parameter):
    response = {}
    response['status'] = "Failure"
    response['error'] = "Please enter "+parameter
    return response