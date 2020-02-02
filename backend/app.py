from flask import Flask, request
from flask_restful import Resource, Api

from services.login import LoginService
from services.register import RegisterService
from services.home import HomeService
from services.house import HouseService
from services.add import AddService

app = Flask(__name__)
api = Api(app)

# API service calls
class Login(Resource):
    def get(self):
        return {"message": "Login Service"}, 200
    
    def post(self):
        args=request.get_json()
        return LoginService(args), 200

class Register(Resource):
    def get(self):
        return {"message": "Register Service"}, 200
    
    def post(self):
        args=request.get_json()
        return RegisterService(args), 200

class Home(Resource):
    def get(self):
        return {"message": "Home Service"}, 200
    
    def post(self):
        args=request.get_json()
        return HomeService(args), 200

class House(Resource):
    def get(self):
        return {"message": "House Service"}, 200
    
    def post(self):
        args=request.get_json()
        return HouseService(args), 200

class Add(Resource):
    def get(self):
        return {"message": "Add Service"}, 200
    
    def post(self):
        args=request.get_json()
        return AddService(args), 200

# API endpoint routes
api.add_resource(Login, '/login')
api.add_resource(Register, '/register')
api.add_resource(Home, '/home')
api.add_resource(House, '/house')
api.add_resource(Add, '/add')

# Running Flask app
if __name__ == "__main__":
    app.run(debug = True)