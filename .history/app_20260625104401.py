from flask import Flask, render_template, request, jsonify
from flask_bcrypt import Bcrypt
import sqlite3
import os
print("DB PATH:", os.path.abspath("movies.db"))

app = Flask(__name__)
bcrypt = Bcrypt(app)


# ======================
# DATABASE INIT
# ======================
def init_db():
    conn = sqlite3.connect('movies.db')
    cursor = conn.cursor()

    # USERS TABLE
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            password TEXT
        )
    ''')

    # MOVIES TABLE
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS movies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            rating REAL
        )
    ''')

    conn.commit()
    conn.close()


init_db()


# ======================
# PAGES ROUTES
# ======================
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/signup')
def signup():
    return render_template('signup.html')


# ======================
# REGISTER (SIGNUP)
# ======================
@app.route('/register', methods=['POST'])
def register():

    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    

    conn = sqlite3.connect('movies.db')
    cursor = conn.cursor()

    cursor.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        (name, email, password)
    )

    conn.commit()
    conn.close()

    return jsonify({
        "message": "Account Created Successfully"
    })


# ======================
# LOGIN
# ======================
@app.route('/login-user', methods=['POST'])
def login_user():

    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    conn = sqlite3.connect('movies.db')
    cursor = conn.cursor()

    cursor.execute(
        'SELECT name FROM users WHERE email=? AND password=?',
        (email, password)
    )

    user = cursor.fetchone()
    conn.close()

    if user:
        return jsonify({
            "success": True,
            "name": user[0]
        })
    else:
        return jsonify({
            "success": False,
            "message": "Invalid Email or Password"
        })


# ======================
# ADD MOVIE
# ======================
@app.route('/movies', methods=['POST'])
def add_movie():

    data = request.get_json()

    title = data.get('title')
    rating = data.get('rating')

    conn = sqlite3.connect('movies.db')
    cursor = conn.cursor()

    cursor.execute(
        'INSERT INTO movies (title, rating) VALUES (?, ?)',
        (title, rating)
    )

    conn.commit()
    conn.close()

    return jsonify({
        "message": "Movie added successfully",
        "title": title,
        "rating": rating
    })


# ======================
# RUN SERVER
# ======================
if __name__ == '__main__':
    app.run(debug=True)