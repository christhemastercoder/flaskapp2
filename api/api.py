from flask import Flask, request
import time
import pyodbc as po
# from dbConnector import p1, p2, p3
import user_db as DB
import user_db2 as DBB
app = Flask(__name__)

@app.route('/time')
def get_curr_time():
    return {'time' : time.time()}

@app.route('/')
def origin():
    return 'hello world'

    
@app.route('/newPerson', methods = ['POST'])
def add_person():
    name = request.form['name']
    age = request.form['age']
    job = request.form['position']
    id = request.form['id']
    DB.addPerson(name, age, job, id)
    return '', 204

@app.route('/allPeople')
def get_all_People():
    return DBB.getAllPeople()

@app.route('/getSpecificStaff')
def getSpecificStaff():
    name = request.args.get('name')
    return DB.getPerson(name)

@app.route('/allPeople2')
def getPpl2():
    return DBB.getAllPeople2()
