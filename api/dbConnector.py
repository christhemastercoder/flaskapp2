import pyodbc as po

#Connection Variables
server = '127.0.0.1,1433'
database = 'People'
username = 'sa'
password = '615Laurafc!@'

#Connection string
cnxn = po.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER=' +
        server+';DATABASE='+database+';UID='+username+';PWD=' + password)
cursor = cnxn.cursor()

# cursor.execute("SELECT TOP (3) name, position, age FROM People.dbo.Staff")

# row = cursor.fetchone()
# while row:
#     print(str(row[0]) + ", " + str(row[1] or '') + ", " + str(row[2] or ''))
#     row = cursor.fetchone()

# row = cursor.fetchone()
# p1 = str(row[0]) + ", " + str(row[1]) + ", " + str(row[2])

# row = cursor.fetchone()
# p2 = str(row[0]) + ", " + str(row[1]) + ", " + str(row[2])

# row = cursor.fetchone()
# p3 = str(row[0]) + ", " + str(row[1]) + ", " + str(row[2])





cursor.close()
del cursor

cnxn.close()