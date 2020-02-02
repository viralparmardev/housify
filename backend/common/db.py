from common import constants
import pymysql

# database connection class and methods
class Db(object):
    def __init__(self):
        self.db = pymysql.connect(constants.DB_HOST, constants.DB_USER, constants.DB_PASSWORD, constants.DB_NAME)

    def select(self, sql):
        cursor = self.db.cursor(pymysql.cursors.DictCursor)
        cursor.execute(sql)
        results = cursor.fetchall()
        self.db.close()
        return results

    def insert(self, sql, val):
        cursor = self.db.cursor(pymysql.cursors.DictCursor)
        cursor.execute(sql, val)
        self.db.commit()
        self.db.close()
        insert_id = cursor.lastrowid
        return insert_id
