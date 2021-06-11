import pyodbc as po
from flask import jsonify

server = '127.0.0.1,1433'
database = 'People'
username = 'sa'
password = '615Laurafc!@'

cnxn = po.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER=' + server + ';DATABASE='+database+';UID='+username+';PWD=' + password)
cursor = cnxn.cursor()

def getAllPeople():
    cursor.execute("""EXEC dbo.Get_Everybody""")
    data = []
    for row in cursor:
        strform = str(row)
        strform = strform[1:]
        strform = strform[:-1]
        strform = strform.replace("'", "")
        data.append(strform)
    cnxn.commit()
    return jsonify(data)


def getAllPeople2():
    cursor.execute("""EXEC dbo.Get_Everybody""")
    data = []
    for row in cursor:
        tempobj = {
            "name" : str(row[0]),
            "age": row[3],
            "position": str(row[2]),
            "id":row[1]
        }
        data.append(tempobj)
    return jsonify(data)
